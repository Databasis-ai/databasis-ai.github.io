import { FC } from 'react'
import Image from 'next/image'

interface ImageProps {
  imgClass?: string
  src?: string
  alt: string
  width: number
  height: number
}

const NextImage: FC<ImageProps> = ({ imgClass, src, alt, width, height, placeholder }) => {
  return (
    <span>
      <Image
								placeholder={placeholder}
        alt={alt}
        className={imgClass}
        height={height}
        src={`/${src}`}
        width={width}
      />
    </span>
  )
}

export default NextImage
