import GithubIconImage from '@/image/github.svg'

interface Props {
  width?: string
}

export function GithubIcon({ width = '25px' }: Props) {
  return (
    <a href='https://github.com/mochi-yu'>
      <img src={GithubIconImage.src} width={width} />
    </a>
  )
}
