import { Image } from '@unpic/react'
import React from 'react'

export const Background = () => {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <Image
      data-loaded={loaded}
      className="pointer-events-none absolute inset-0 h-screen w-screen scale-110 object-cover blur-sm duration-300"
      src="/images/bg.webp"
      aria-hidden
      onLoad={() => setLoaded(true)}
      width={1920}
      height={1080}
    />
  )
}
