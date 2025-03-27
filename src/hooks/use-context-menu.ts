import React from 'react'

interface ContextMenuProps {
  /**
   * Disables the context menu
   */
  defaultIsDisabled?: boolean
}

/**
 * Disables the context menu, disabled in production
 *
 * @default false
 */
export const useContextMenu = (props: ContextMenuProps = {}) => {
  const { defaultIsDisabled = false } = props

  React.useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      if (defaultIsDisabled || process.env.NODE_ENV === 'production')
        e.preventDefault()
    }

    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, [defaultIsDisabled])
}
