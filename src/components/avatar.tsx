import clsx from 'clsx'

type AvatarProps = {
  name: string
  image: string
  className?: string
}

export const Avatar = ({ name, image, className, ...props }: AvatarProps) => {
  return (
    <img
      className={clsx('aspect-square w-[150px] h-[150px]', className)}
      src={image}
      alt={`Avatar of ${name}`}
      loading="lazy"
      {...props}
    />
  )
}
