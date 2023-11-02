import { AppBar, Box, Stack, Typography } from '@mui/material'

export function Footer() {
  return (
    <>
      <AppBar component='footer' position='static' sx={{ bgcolor: 'gray', boxShadow: 'none' }}>
        <Stack height='60px' justifyContent='center' alignItems='center'>
          <Typography variant='caption' fontSize='15px'>
            ©2023　もちポートフォリオ
          </Typography>
        </Stack>
      </AppBar>
    </>
  )
}
