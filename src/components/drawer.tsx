import { PropsWithChildren, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { XIcon } from '@heroicons/react/solid'
import { useId } from '@/hooks/use-id'

type DrawerProps = {
  title: string
  isOpen: boolean
  onClose: () => void
}

export const Drawer = ({
  title,
  isOpen,
  children,
  onClose,
}: PropsWithChildren<DrawerProps>) => {
  const id = useId('drawer')

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ height: 0 }}
          animate={{ height: 520 }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal={isOpen}
          aria-labelledby={id}
          className="absolute h-0 bottom-0 left-0 right-0 flex flex-col bg-gray-800 z-10 px-2 py-4 md:p-6"
        >
          {isOpen && (
            <>
              <div className="flex justify-between items-center">
                <h2 id={id} className="text-lg md:text-4xl font-bold leading-6">
                  {title}
                </h2>

                <button type="button" aria-label="Close" onClick={onClose}>
                  <XIcon className="h-7 w-7" aria-hidden />
                </button>
              </div>

              <div className="mt-6 flex-1 overflow-auto p-1">{children}</div>
            </>
          )}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
