import { Box, Stack } from '@mui/material'
import { TopPageProfile } from '../components/ui/top-page/Profile'
import { TopPageHeader } from './_components/top_page_header'

export default function TopPage() {
  return (
    <>
      <Stack>
        {/* トップページの名前と画像 */}
        <TopPageHeader />

        <Box sx={{ height: 'auto', boxShadow: '0px -5px 10px gray', py: '50px' }}>
          <Box maxWidth='1200px' margin='auto'>
            {/* 自己紹介の概要 */}
            <TopPageProfile />

            {/* プロダクトの概要 */}
            <Box></Box>

            {/* スキルの概要 */}
            <Box></Box>
          </Box>
        </Box>
      </Stack>
    </>
  )
}
