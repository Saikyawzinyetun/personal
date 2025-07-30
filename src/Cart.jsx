import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
 
export default function Cart({ items, onInc, onDec, onRemove }) {
  return (
    <Table sx={{ mt: 4 }}>
      <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Total</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <IconButton
                size="small"
                onClick={() => onDec(item.id)}
              >
                <RemoveIcon />
              </IconButton>
              {item.qty}
              <IconButton
                size="small"
                onClick={() => onInc(item.id)}
              >
                <AddIcon />
              </IconButton>
            </TableCell>
            <TableCell>${item.price.toFixed(2)}</TableCell>
            <TableCell>
              ${(item.price * item.qty).toFixed(2)}
            </TableCell>
            <TableCell>
              <IconButton
                size="small"
                color="error"
                onClick={() => onRemove(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
 
 