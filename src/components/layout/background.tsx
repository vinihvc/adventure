import { Image } from '@unpic/react'

export const Background = () => {
  return (
    <>
      <Image
        className="pointer-events-none absolute inset-0 h-[110dvh] w-screen scale-110 object-cover blur-sm [image-rendering:pixelated]"
        src="/images/bg.webp"
        aria-hidden
        width={1920}
        height={1080}
      />
      <div className="fixed inset-0 bg-foreground/20" />
    </>
  )
}
