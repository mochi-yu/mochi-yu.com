import Image from 'next/image'
import QiitaIconImage from '@/image/qiita.png'

interface Props {
  width?: number
}

export function QiitaIcon({ width = 25 }: Props) {
  return (
    <a href='https://qiita.com/mochi_2225'>
      <Image src={QiitaIconImage} width={width} alt='Qiitaのアイコン' />
    </a>
  )
}
