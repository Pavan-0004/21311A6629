import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Pagination, TextField, MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';
import ProductCard from './productcard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ category: '', company: '', rating: '', priceRange: '', availability: '' });
    const [sorting, setSorting] = useState({ sortBy: '', order: '' });
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        // Fetch products based on filters, sorting, and pagination
        const fetchProducts = async () => {
            const response = await axios.get('http://your-backend-api/products', {
                params: { ...filters, ...sorting, page, pageSize }
            });
            setProducts(response.data);
        };
        fetchProducts();
    }, [filters, sorting, page, pageSize]);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSortChange = (e) => {
        setSorting({ ...sorting, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div>
                <TextField label="Category" name="category" value={filters.category} onChange={handleFilterChange} />
                <TextField label="Company" name="company" value={filters.company} onChange={handleFilterChange} />
                <TextField label="Rating" name="rating" value={filters.rating} onChange={handleFilterChange} />
                <TextField label="Price Range" name="priceRange" value={filters.priceRange} onChange={handleFilterChange} />
                <FormControl>
                    <InputLabel>Availability</InputLabel>
                    <Select name="availability" value={filters.availability} onChange={handleFilterChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={true}>Available</MenuItem>
                        <MenuItem value={false}>Out of Stock</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <InputLabel>Sort By</InputLabel>
                    <Select name="sortBy" value={sorting.sortBy} onChange={handleSortChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="price">Price</MenuItem>
                        <MenuItem value="rating">Rating</MenuItem>
                        <MenuItem value="discount">Discount</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Order</InputLabel>
                    <Select name="order" value={sorting.order} onChange={handleSortChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="asc">Ascending</MenuItem>
                        <MenuItem value="desc">Descending</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={Math.ceil(products.total / pageSize)}
                page={page}
                onChange={(e, value) => setPage(value)}
            />
        </div>
    );
};

export default ProductList;
