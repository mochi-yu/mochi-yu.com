import { Divider, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon } from '../icons/github_icon'
import { QiitaIcon } from '../icons/qiita_icon'
import UserIconImage from '@/image/user-image.jpg'

export function TopPageProfile() {
  return (
    <Stack alignItems='center' justifyContent='center' mx='30px'>
      <Typography
        align='center'
        variant='h3'
        fontWeight='bold'
        sx={{ fontSize: { xs: '10vw', sm: '3rem' } }}
      >
        プロフィール
      </Typography>
      <Divider sx={{ width: '140px', my: '20px', borderBottomWidth: 5 }} />
      <Grid
        container
        spacing={5}
        alignItems='flex-start'
        sx={{ px: { xs: '30px', md: '50px' } }}
        justifyContent='center'
      >
        <Grid item xs={12} md={4}>
          <Image
            src={UserIconImage}
            alt={'アイコン画像'}
            style={{
              paddingTop: '0px',
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
              borderRadius: '30% / 25%',
            }}
            priority={true}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack direction='row' marginBottom='10px' alignItems='center' spacing={2}>
            <Typography variant='h4' fontWeight='bold'>
              もっちー
            </Typography>
            <GithubIcon width={30} />
            <QiitaIcon width={30} />
          </Stack>
          <Typography marginY='10px'>
            2001年生まれ。神奈川県横浜市 出身、長野県諏訪地域 在住。
            <br />
            好奇心旺盛に、<b>プログラミング</b>や<b>電子工作</b>などの技術に関わることを初めとして、
            <b>音楽</b>や<b>写真</b>、<b>動画作成</b>など様々なことにチャレンジしています。
            <br />
          </Typography>

          <Typography variant='h6' fontWeight='bold'>
            技術に関する興味
          </Typography>
          <Typography marginY='15px'>
            技術としては、<b>サーバサイド</b>の開発を主に担当することが多いですが、
            <b>
              ゲーム開発、Webフロントエンド、ネイティブアプリ、IoT、機械学習、競技プログラミング
            </b>
            など、 様々な分野に取り組んでいます。
            <br />
            今までに作成してきたものについては
            <Link href='/works'>
              <b>Worksのページ</b>
            </Link>
            を、使っている技術については
            <Link href='/skills'>
              <b>Skillsのページ</b>
            </Link>
            を参照してください。
          </Typography>

          <Typography variant='h6' fontWeight='bold'>
            その他の興味
          </Typography>
          <Typography marginY='15px'>
            <b>写真の撮影、動画制作、音楽制作、デザイン</b>などの創作活動にも興味があって、
            勉強や練習をしながらよりよいモノが創れるように励んでいます。
            <br />
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  )
}
