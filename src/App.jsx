// src/App.jsx

import React, { useState, useEffect } from 'react';

import {

  Container,

  Typography,

  TextField,

  Snackbar,

  Alert

} from '@mui/material';
 
import { products } from './products';

import ProductList from './ProductList';

import Cart from './Cart';

import Receipt from './Receipt';
 
export default function App() {

  // Cart state + persistence

  const [cart, setCart] = useState(() => {

    const saved = localStorage.getItem('cart');

    try {

      const parsed = JSON.parse(saved);

      return Array.isArray(parsed) ? parsed : [];

    } catch {

      return [];

    }

  });
 
  useEffect(() => {

    localStorage.setItem('cart', JSON.stringify(cart));

  }, [cart]);
 
  // Snackbar state

  const [snack, setSnack] = useState({ open: false, msg: '' });
 
  // Search filter state

  const [filter, setFilter] = useState('');

  const visible = products.filter(p =>

    p.name.toLowerCase().includes(filter.toLowerCase())

  );
 
  // Handlers

  const addToCart = product => {

    setCart(prev =>

      prev.find(i => i.id === product.id)

        ? prev.map(i =>

            i.id === product.id ? { ...i, qty: i.qty + 1 } : i

          )

        : [...prev, { ...product, qty: 1 }]

    );

    setSnack({ open: true, msg: `${product.name} added!` });

  };
 
  const incQty = id =>

    setCart(prev =>

      prev.map(i => (i.id === id ? { ...i, qty: i.qty + 1 } : i))

    );
 
  const decQty = id =>

    setCart(prev =>

      prev

        .map(i => (i.id === id ? { ...i, qty: i.qty - 1 } : i))

        .filter(i => i.qty > 0)

    );
 
  const removeItem = id =>

    setCart(prev => prev.filter(i => i.id !== id));
 
  // Totals

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const vat      = subtotal * 0.07;

  const total    = subtotal + vat;
 
  return (
<Container sx={{ mt: 4 }}>
<Typography variant="h4" gutterBottom>

        POS Shopping Cart
</Typography>
 
      {/* Search */}
<TextField

        label="Search Products"

        value={filter}

        onChange={e => setFilter(e.target.value)}

        sx={{ mb: 2, width: 300 }}

      />
 
      {/* Products */}
<ProductList products={visible} onAdd={addToCart} />
 
      {/* Cart */}
<Cart

        items={cart}

        onInc={incQty}

        onDec={decQty}

        onRemove={removeItem}

      />
 
      {/* Summary */}
<Typography sx={{ mt: 2 }}>

        Subtotal: ${subtotal.toFixed(2)}
</Typography>
<Typography>

        VAT (7%): ${vat.toFixed(2)}
</Typography>
<Typography variant="h6">

        Total: ${total.toFixed(2)}
</Typography>
 
      {/* Receipt */}
<Receipt

        items={cart}

        subtotal={subtotal}

        vat={vat}

        total={total}

      />
 
      {/* Snackbar */}
<Snackbar

        open={snack.open}

        autoHideDuration={1500}

        onClose={() => setSnack(s => ({ ...s, open: false }))}
>
<Alert

          onClose={() => setSnack(s => ({ ...s, open: false }))}

          severity="success"

          sx={{ width: '100%' }}
>

          {snack.msg}
</Alert>
</Snackbar>
</Container>

  );

}

 