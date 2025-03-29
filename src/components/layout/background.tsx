import { Image } from '@unpic/react'

export const Background = () => {
  return (
    <Image
      className="pointer-events-none absolute inset-0 h-screen w-screen scale-105 object-cover sm:blur-xs"
      src="/images/bg.webp"
      aria-hidden
      width={1920}
      height={1080}
    />
  )
}
