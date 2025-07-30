// src/ProductList.jsx

import React from 'react';

import {

  Grid,

  Card,

  CardContent,

  Typography,

  Button

} from '@mui/material';
 
export default function ProductList({ products, onAdd }) {

  return (
<Grid container spacing={2} sx={{ mb: 4 }}>

      {products.map(p => (
<Grid item xs={12} sm={6} md={4} key={p.id}>
<Card

            sx={{

              transition: 'transform 0.2s, box-shadow 0.2s',

              '&:hover': {

                transform: 'scale(1.03)',

                boxShadow: 4,

              }

            }}
>
<CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
<Typography variant="h6">{p.name}</Typography>
<Typography>${p.price.toFixed(2)}</Typography>
<Button

                variant="contained"

                size="small"

                onClick={() => onAdd(p)}
>

                Add to Cart
</Button>
</CardContent>
</Card>
</Grid>

      ))}
</Grid>

  );

}

 