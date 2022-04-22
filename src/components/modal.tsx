import { Dialog } from '@headlessui/react'

import { XIcon } from '@heroicons/react/solid'

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
      <div className="min-h-screen px-4 text-center">
        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>

        <div className="relative inline-block w-full max-w-sm p-8 text-white text-left align-middle transition-all transform bg-gray-900 shadow-2xl rounded-2xl">
          <div className="flex justify-between items-center">
            <Dialog.Title as="h3" className="text-4xl font-bold leading-6">
              {title}
            </Dialog.Title>

            <button
              className="appearance-none"
              aria-label="Close"
              onClick={onClose}
            >
              <XIcon className="h-7 w-7 " aria-hidden />
            </button>
          </div>

          <div className="mt-10">{children}</div>
        </div>
      </div>
    </Dialog>
  )
}
