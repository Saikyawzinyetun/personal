// src/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff8c00',        // warm orange
      light: '#ffa733',
      dark: '#cc6c00',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e65100',        // deep burnt orange
      light: '#ff8126',
      dark: '#ac1900',
      contrastText: '#fff',
    },
    background: {
      default: '#fff3e0',     // very light warm (peach)
      paper:   '#ffffff',     // keep panels white
    },
  },
});
