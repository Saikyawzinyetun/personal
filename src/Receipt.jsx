// Receipt.jsx
import { TextField } from '@mui/material';
 
export default function Receipt({ items, subtotal, vat, total }) {
  const lines = [
    '*** My Shop Receipt ***',
    ...items.map(i => `${i.name} x${i.qty}  $${(i.price * i.qty).toFixed(2)}`),
    `Subtotal: $${subtotal.toFixed(2)}`,
    `VAT (7%): $${vat.toFixed(2)}`,
    `Total: $${total.toFixed(2)}`,
  ];
  return (
    <TextField
      multiline
      fullWidth
      minRows={items.length + 5}
      value={lines.join('\n')}
      variant="outlined"
    />
  );
}