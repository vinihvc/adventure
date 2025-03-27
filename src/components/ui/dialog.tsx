import { cn } from '@/utils/cn'
import * as RDialog from '@radix-ui/react-dialog'
import { Image } from '@unpic/react'
import { X } from 'lucide-react'
import type * as React from 'react'

export const Dialog = RDialog.Root

export const DialogTrigger = RDialog.Trigger

export const DialogPortal = RDialog.Portal

export const DialogClose = RDialog.Close

export const DialogOverlay = (
  props: React.ComponentProps<typeof RDialog.Overlay>,
) => {
  const { className, ...rest } = props

  return (
    <RDialog.Overlay
      className={cn(
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-foreground/40 backdrop-blur-xs data-[state=closed]:animate-out data-[state=open]:animate-in',
        className,
      )}
      {...rest}
    />
  )
}

DialogOverlay.displayName = RDialog.Overlay.displayName

interface DialogContentProps
  extends React.ComponentProps<typeof RDialog.Content> {
  /**
   * If `true`, a close button will be rendered in the top-right corner.
   *
   * @default true
   */
  hasCloseButton?: boolean
}

export const DialogContent = (props: DialogContentProps) => {
  const { hasCloseButton = true, className, children, ...rest } = props

  return (
    <DialogPortal>
      <DialogOverlay />

      <RDialog.Content
        className={cn(
          'fixed z-50 grid',
          'flex flex-col',
          'max-sm:bottom-0 max-sm:translate-y-0',
          '-translate-x-1/2 sm:-translate-y-1/2 left-1/2 sm:top-1/2',
          'max-h-[80%] w-full sm:max-h-[70%] sm:max-w-lg',
          'gap-4 p-3 md:p-6',
          'bg-background',
          'border border-black shadow-lg',
          'duration-200',
          'sm:shadow-[-8px_8px_0_0] sm:shadow-black',
          'data-[state=closed]:animate-out data-[state=open]:animate-in',
          'max-sm:data-[state=open]:slide-in-from-bottom-1/2 max-sm:data-[state=closed]:slide-out-to-bottom-1/2',
          'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
          'sm:data-[state=open]:zoom-in-95 sm:data-[state=closed]:zoom-out-95',
          className,
        )}
        {...rest}
      >
        {children}

        {hasCloseButton && (
          <RDialog.Close className="absolute top-4 right-4 opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:pointer-events-none">
            <X className="size-6" />
            <span className="sr-only">Close</span>
          </RDialog.Close>
        )}
      </RDialog.Content>
    </DialogPortal>
  )
}

DialogContent.displayName = RDialog.Content.displayName

interface DialogImageProps {
  src: string
  alt: string
  className?: string
}

export const DialogImage = (props: DialogImageProps) => {
  const { className, ...rest } = props

  return (
    <div className="-top-28 max-md:-translate-x-1/2 absolute left-1/2 inline-flex md:left-2">
      <Image
        layout="constrained"
        width={200}
        height={200}
        className={cn(
          'aspect-square size-40 rounded-full border-2 border-black drop-shadow-md',
          className,
        )}
        {...rest}
      />
    </div>
  )
}

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
    {...props}
  />
)

DialogHeader.displayName = 'DialogHeader'

export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'mt-5 flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2',
      className,
    )}
    {...props}
  />
)

DialogFooter.displayName = 'DialogFooter'

export const DialogTitle = (
  props: React.ComponentProps<typeof RDialog.Title>,
) => {
  const { className, ...rest } = props

  return (
    <RDialog.Title
      className={cn(
        'font-semibold text-lg leading-none tracking-tight',
        className,
      )}
      {...rest}
    />
  )
}

export const DialogDescription = (
  props: React.ComponentProps<typeof RDialog.Description>,
) => {
  const { className, ...rest } = props

  return (
    <RDialog.Description
      className={cn('text-sm opacity-80', className)}
      {...rest}
    />
  )
}
