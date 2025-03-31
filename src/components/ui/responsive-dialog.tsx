import { useMediaQuery } from '@/hooks/use-media-query'
import { cn } from '@/lib/cn'
import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'

interface RootResponsiveDialogProps extends React.PropsWithChildren {
  /**
   * If `true`, the component will be rendered as a child element
   */
  open?: boolean
  /**
   * The callback function to handle the open state change
   */
  onOpenChange?: (open: boolean) => void
}

interface ResponsiveDialogProps extends React.PropsWithChildren {
  /**
   * The class name to apply to the component
   */
  className?: string
  /**
   * If `true`, the component will be rendered as a child element
   */
  asChild?: true
}

const ResponsiveDialogContext = React.createContext<{ isDesktop: boolean }>({
  isDesktop: false,
})

const useResponsiveDialogContext = () => {
  const context = React.useContext(ResponsiveDialogContext)

  if (!context) {
    throw new Error(
      'ResponsiveDialog components cannot be rendered outside the ResponsiveDialog Context',
    )
  }

  return context
}

export const ResponsiveDialog = (props: RootResponsiveDialogProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const Component = isDesktop ? Dialog : Drawer

  return (
    <ResponsiveDialogContext.Provider value={{ isDesktop }}>
      <Component {...props} {...(!isDesktop && { autoFocus: true })} />
    </ResponsiveDialogContext.Provider>
  )
}

export const ResponsiveDialogTrigger = (props: ResponsiveDialogProps) => {
  const { isDesktop } = useResponsiveDialogContext()

  const Component = isDesktop ? DialogTrigger : DrawerTrigger

  return <Component {...props} />
}

export const ResponsiveDialogClose = (props: ResponsiveDialogProps) => {
  const { isDesktop } = useResponsiveDialogContext()

  const Component = isDesktop ? DialogClose : DrawerClose

  return <Component {...props} />
}

interface ResponsiveDialogContentProps
  extends React.ComponentProps<typeof DialogContent> {}

export const ResponsiveDialogContent = (
  props: ResponsiveDialogContentProps,
) => {
  const { isDesktop } = useResponsiveDialogContext()

  const Component = isDesktop ? DialogContent : DrawerContent

  return <Component {...props} />
}

export const ResponsiveDialogDescription = (props: ResponsiveDialogProps) => {
  const { isDesktop } = useResponsiveDialogContext()

  const Component = isDesktop ? DialogDescription : DrawerDescription

  return <Component {...props} />
}

export const ResponsiveDialogHeader = (props: ResponsiveDialogProps) => {
  const { isDesktop } = useResponsiveDialogContext()

  const Component = isDesktop ? DialogHeader : DrawerHeader

  return <Component {...props} />
}

export const ResponsiveDialogTitle = (props: ResponsiveDialogProps) => {
  const { isDesktop } = useResponsiveDialogContext()

  const Component = isDesktop ? DialogTitle : DrawerTitle

  return <Component {...props} />
}

export const ResponsiveDialogBody = (props: ResponsiveDialogProps) => {
  const { className, ...rest } = props

  return <div className={cn('px-4 md:px-0', className)} {...rest} />
}

export const ResponsiveDialogFooter = (props: ResponsiveDialogProps) => {
  const { isDesktop } = useResponsiveDialogContext()

  const Component = isDesktop ? DialogFooter : DrawerFooter

  return <Component {...props} />
}
