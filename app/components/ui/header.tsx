'use client'

import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

interface HeaderProps {
  window?: () => Window
}

export function Header(props: HeaderProps) {
  const window = props.window
  const [mobileOpen, setMobileOpen] = useState(false)

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const navItems = ['Top', 'About', 'Skills', 'Works', 'Contact']
  const container = window !== undefined ? () => window().document.body : undefined
  const drawerWidth = 240

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Box sx={{ display: 'flex' }} component='header'>
        <Slide appear={false} direction='down' in={!trigger}>
          <AppBar>
            <Toolbar>
              {/* 幅の狭い画面のハンバーガーバー */}
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: 'block' }}>
                もっちー | mochi-yu
              </Typography>

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: '#fff', textTransform: 'none' }}>
                    <Typography>{item}</Typography>
                  </Button>
                ))}
              </Box>

              <nav>
                <Drawer
                  container={container}
                  variant='temporary'
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
                >
                  {drawer}
                </Drawer>
              </nav>
            </Toolbar>
          </AppBar>
        </Slide>
      </Box>
    </>
  )
}
