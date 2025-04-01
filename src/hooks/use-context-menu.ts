import { IS_DEV } from '@/config/envs'
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
      if (defaultIsDisabled || IS_DEV) e.preventDefault()
    }

    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, [defaultIsDisabled])
}
