import React from 'react'

export type UseDisclosureProps = {
  defaultIsOpen?: boolean
}

/**
 * Custom hook used to help handle common open, close, or toggle scenarios.
 *
 * @example
 * ```js
 * const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
 * ```
 */
export const useDisclosure = (props: UseDisclosureProps = {}) => {
  const [isOpenState, setIsOpen] = React.useState(props.defaultIsOpen || false)

  const onClose = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpen = React.useCallback(() => {
    setIsOpen(true)
  }, [])

  const onToggle = React.useCallback(() => {
    setIsOpen((e) => !e)
  }, [])

  return {
    isOpen: !!isOpenState,
    onOpen,
    onClose,
    onToggle,
  }
}
