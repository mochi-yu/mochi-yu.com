'use client'

import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
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
import Link from 'next/link'
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

  const headerItems = [
    {
      label: 'About',
      path: '/',
    },
    {
      label: 'Skills',
      path: '/skill',
    },
    {
      label: 'Works',
      path: '/work',
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ]

  const container = window !== undefined ? () => window().document.body : undefined
  const drawerWidth = 240

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {headerItems.map((item) => (
          <Link
            href={item.path}
            style={{ textDecoration: 'none', color: 'inherit' }}
            key={item.label}
          >
            <ListItem key={item.label} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
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

              <Box sx={{ flexGrow: 1, display: 'block' }}>
                <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant='h6' sx={{ display: 'inline' }}>
                    もっちー | mochi-yu
                  </Typography>
                </Link>
              </Box>

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {headerItems.map((item) => (
                  <Link href={item.path} key={item.label}>
                    <Button key={item.label} sx={{ color: '#fff', textTransform: 'none' }}>
                      <Typography>{item.label}</Typography>
                    </Button>
                  </Link>
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
