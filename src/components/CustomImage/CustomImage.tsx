import React, { FC } from 'react'
import Image from 'next/image'

interface ICustomImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | 'raw' | undefined
  objectFit?: any
  className?: string
}

const CustomImage: FC<ICustomImageProps> = ({
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
  className,
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    layout={layout}
    objectFit={objectFit}
    className={className}
  />
)

export default CustomImage
