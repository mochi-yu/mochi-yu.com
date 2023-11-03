import QiitaIconImage from '@/qiita.png'

interface Props {
  width?: string
}

export function QiitaIcon({ width = '25px' }: Props) {
  return (
    <a href='https://github.com/mochi-yu'>
      <img src={QiitaIconImage.src} width={width} />
    </a>
  )
}
