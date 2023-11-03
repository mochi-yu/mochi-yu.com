import Image from 'next/image'
import GithubIconImage from '@/image/github.svg'

interface Props {
  width?: number
}

export function GithubIcon({ width = 25 }: Props) {
  return (
    <a href='https://github.com/mochi-yu'>
      <Image src={GithubIconImage.src} width={width} height={width} alt='GitHubのアイコン'></Image>
    </a>
  )
}
