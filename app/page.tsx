import { Box, Divider, Stack, Typography } from '@mui/material'
import bgImage from '@/image/top-page-bg-image.jpg'
import { GithubIcon } from './components/ui/icons/github_icon'
import { QiitaIcon } from './components/ui/icons/qiita_icon'
import { TopPageProfile } from './components/ui/top-page/Profile'

export default function TopPage() {
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
            spacing={3}
          >
            <Typography variant='h3' sx={{ fontSize: { xs: '30px', md: '60px' } }}>
              もっちー / mochi-yu
            </Typography>
            <Divider sx={{ width: '20%', borderBottomWidth: 4 }} />
            <Stack direction='row' spacing={2}>
              <GithubIcon />
              <QiitaIcon />
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ height: '500px', boxShadow: '0px -5px 10px gray', py: '50px' }}>
          {/* 自己紹介の概要 */}
          <TopPageProfile />

          {/* プロダクトの概要 */}
          <Box></Box>

          {/* スキルの概要 */}
          <Box></Box>
        </Box>
      </Stack>
    </>
  )
}
