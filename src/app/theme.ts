'use client'

import { createTheme } from '@mui/material'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 769,
      lg: 1200,
      xl: 1536,
    },
  },
})
