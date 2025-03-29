import type React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/lib/cn'

export const Drawer = (
  props: React.ComponentProps<typeof DrawerPrimitive.Root>,
) => {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

export const DrawerTrigger = (
  props: React.ComponentProps<typeof DrawerPrimitive.Trigger>,
) => {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

export const DrawerPortal = (
  props: React.ComponentProps<typeof DrawerPrimitive.Portal>,
) => {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

export const DrawerClose = (
  props: React.ComponentProps<typeof DrawerPrimitive.Close>,
) => {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

export const DrawerOverlay = (
  props: React.ComponentProps<typeof DrawerPrimitive.Overlay>,
) => {
  const { className, ...rest } = props

  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'fixed inset-0 z-50',
        'bg-black/50',
        'data-[state=closed]:animate-out data-[state=open]:animate-in',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      {...rest}
    />
  )
}

export const DrawerContent = (
  props: React.ComponentProps<typeof DrawerPrimitive.Content>,
) => {
  const { className, children, ...rest } = props

  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />

      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content fixed z-50 flex h-auto flex-col bg-background',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className,
        )}
        {...rest}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

export const DrawerHeader = (props: React.ComponentProps<'div'>) => {
  const { className, ...rest } = props

  return (
    <div
      data-slot="drawer-header"
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...rest}
    />
  )
}

export const DrawerFooter = (props: React.ComponentProps<'div'>) => {
  const { className, ...rest } = props

  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...rest}
    />
  )
}

export const DrawerTitle = (
  props: React.ComponentProps<typeof DrawerPrimitive.Title>,
) => {
  const { className, ...rest } = props

  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('font-semibold text-foreground', className)}
      {...rest}
    />
  )
}

export const DrawerDescription = (
  props: React.ComponentProps<typeof DrawerPrimitive.Description>,
) => {
  const { className, ...rest } = props

  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-muted-foreground', className)}
      {...rest}
    />
  )
}
