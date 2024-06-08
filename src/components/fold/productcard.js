import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
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

export default ProductCard;
