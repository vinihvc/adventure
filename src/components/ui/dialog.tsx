import { cn } from '@/lib/cn'
import * as RDialog from '@radix-ui/react-dialog'
import { Image } from '@unpic/react'
import { X } from 'lucide-react'
import type * as React from 'react'
import { Button } from './button'

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
          'rounded-xl max-sm:rounded-b-none',
          'max-sm:bottom-0 max-sm:translate-y-0',
          '-translate-x-1/2 sm:-translate-y-1/2 left-1/2 sm:top-1/2',
          'max-h-[80dvh] w-full sm:max-h-[70dvh] sm:max-w-lg',
          'gap-4 p-3 sm:p-6',
          'bg-background',
          'border border-black shadow-lg',
          'duration-200',
          'sm:shadow-[-6px_6px_0_0] sm:shadow-black',
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
          <RDialog.Close
            className="-top-4 -right-4 absolute max-sm:hidden"
            asChild
          >
            <Button className="drop-shadow-lg" variant="black" size="icon">
              <X />
              <span className="sr-only">Close</span>
            </Button>
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
    <div className="-top-28 max-md:-translate-x-1/2 absolute left-1/2 inline-flex rounded-full border-6 border-black md:left-2">
      <Image
        layout="constrained"
        width={200}
        height={200}
        className={cn(
          'pointer-events-none aspect-square size-40 rounded-full border-4 border-white bg-foreground text-foreground drop-shadow-lg [image-rendering:pixelated]',
          className,
        )}
        aria-hidden
        {...rest}
      />
    </div>
  )
}

export const DialogHeader = (props: React.ComponentProps<'div'>) => {
  const { className, ...rest } = props

  return (
    <div
      className={cn(
        'mt-16 flex flex-col gap-2 text-center sm:mt-16 sm:text-left',
        className,
      )}
      {...rest}
    />
  )
}

DialogHeader.displayName = 'DialogHeader'

export const DialogFooter = (props: React.ComponentProps<'div'>) => {
  const { className, ...rest } = props

  return (
    <div
      className={cn(
        'mt-2 flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2',
        className,
      )}
      {...rest}
    />
  )
}

DialogFooter.displayName = 'DialogFooter'

export const DialogTitle = (
  props: React.ComponentProps<typeof RDialog.Title>,
) => {
  const { className, ...rest } = props

  return (
    <RDialog.Title className={cn('font-bold text-2xl', className)} {...rest} />
  )
}

export const DialogDescription = (
  props: React.ComponentProps<typeof RDialog.Description>,
) => {
  const { className, ...rest } = props

  return (
    <RDialog.Description
      className={cn('text-base opacity-80', className)}
      {...rest}
    />
  )
}
