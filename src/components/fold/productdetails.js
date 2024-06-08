import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://your-backend-api/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.company} - {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price} | Rating: {product.rating} | Discount: {product.discount}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.availability ? 'Available' : 'Out of Stock'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductDetails;
