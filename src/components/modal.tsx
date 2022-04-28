import { Dialog } from '@headlessui/react'

import { XIcon } from '@heroicons/react/solid'

import clsx from 'clsx'

type ModalProps = {
  title: string
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
}

export const Modal = ({ title, isOpen, children, onClose }: ModalProps) => {
  return (
    <Dialog
      as="div"
      open={isOpen}
      className="fixed inset-0 z-10 overflow-y-auto"
      onClose={onClose}
    >
      <div className="min-h-screen text-center md:px-4">
        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>

        <div
          className={clsx(
            'relative inline-block align-middle',
            'w-full max-w-3xl',
            'text-left',
            'bg-gray-900',
            'shadow-2xl rounded',
            'p-3 md:p-5',
            'transition-all transform ',
          )}
        >
          <div className="flex flex-col max-h-[50vh]">
            <div className="flex justify-between items-center">
              <Dialog.Title
                as="h3"
                className="text-lg md:text-4xl font-bold leading-6"
              >
                {title}
              </Dialog.Title>

              <button
                type="button"
                className="appearance-none"
                aria-label="Close"
                onClick={onClose}
              >
                <XIcon className="h-7 w-7" aria-hidden />
              </button>
            </div>

            <div className="mt-5 flex-1 overflow-auto p-1">{children}</div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
