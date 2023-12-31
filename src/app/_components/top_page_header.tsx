import { Box, Stack, Typography, Divider } from '@mui/material'
import { GithubIcon } from '@/components/ui/icons/github_icon'
import { QiitaIcon } from '@/components/ui/icons/qiita_icon'
import bgImage from '@/image/top-page-bg-image.jpg'

export function TopPageHeader() {
  return (
    <>
      <Box
        id='top-profile-photo'
        height='90vh'
        sx={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: { xs: 'auto 150vh', md: '1500px auto' },
          backgroundPosition: 'top',
          backgroundPositionY: { md: '-150px', xs: '-100px' },
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Stack
          sx={{ bgcolor: 'rgb(255, 255, 255, .5)' }}
          position='relative'
          height='100%'
          alignItems='center'
          justifyContent='center'
          display='flex'
          spacing={3}
        >
          <Typography variant='h3' sx={{ fontSize: { xs: '30px', md: '60px' } }} fontWeight='bold'>
            もっちー / mochi-yu
          </Typography>
          <Divider sx={{ width: '20%', borderBottomWidth: 4 }} />
          <Stack direction='row' spacing={2}>
            <GithubIcon />
            <QiitaIcon />
          </Stack>
        </Stack>
      </Box>
    </>
  )
}
