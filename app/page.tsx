import { Box, Divider, Paper, Stack, Typography } from '@mui/material'
import bgImage from '@/bg-image.jpg'

export default function HomePage() {
  return (
    <>
      <Stack>
        {/* トップページの名前と画像 */}
        <Box
          id='top-profile-photo'
          height='90vh'
          sx={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundSize: { xs: 'auto 150vh', md: '1500px auto' },
            backgroundPosition: 'top',
            backgroundPositionY: '-150px',
          }}
        >
          <Stack
            sx={{ bgcolor: 'rgb(255, 255, 255, .5)' }}
            position='relative'
            height='100%'
            alignItems='center'
            justifyContent='center'
            display='flex'
            direction='column'
            spacing={3}
          >
            <Typography variant='h3' sx={{ fontSize: { xs: '30px', md: '60px' } }}>
              もっちー / mochi-yu
            </Typography>
            <Divider sx={{ width: '20%', borderBottomWidth: 4 }} />
          </Stack>
        </Box>

        <Box sx={{ height: '500px', boxShadow: '0px -5px 10px gray' }}>
          {/* 自己紹介の概要 */}
          <Box></Box>

          {/* プロダクトの概要 */}
          <Box></Box>

          {/* スキルの概要 */}
          <Box></Box>
        </Box>
      </Stack>
    </>
  )
}
