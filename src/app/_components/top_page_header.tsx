import { Box, Stack, Typography, Divider } from '@mui/material'
import { GithubIcon } from '@/components/ui/icons/github_icon'
import { QiitaIcon } from '@/components/ui/icons/qiita_icon'
import bgImage from '@/image/top-page-bg-image.jpg'

export function TopPageHeader() {
  return (
    <>
      <Box
        id='top-profile-photo'
        maxHeight='90vh'
        sx={{
          backgroundImage: `url(${bgImage.src})`,
          height: { xs: '550px', lg: '90vw' },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundPositionY: { lg: '30%', xs: '10%' },
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Stack
          sx={{ bgcolor: 'rgb(255, 255, 255, .7)' }}
          position='relative'
          height='100%'
          alignItems='center'
          justifyContent='center'
          display='flex'
          spacing={3}
        >
          <Typography variant='h3' sx={{ fontSize: { xs: '30px', lg: '4vw' } }} fontWeight='bold'>
            もっちー / mochi-yu
          </Typography>
          <Divider
            sx={{
              width: { lg: '300px', xs: '180px' },
              borderBottomWidth: 4,
              borderColor: 'silver',
            }}
          />
          <Stack direction='row' spacing={2}>
            <GithubIcon width={30} />
            <QiitaIcon width={30} />
          </Stack>
        </Stack>
      </Box>
    </>
  )
}
