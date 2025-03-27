import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogImage,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export const AboutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="underline-offset-4 outline-hidden hover:underline focus-visible:underline">
        About
      </DialogTrigger>

      <DialogContent>
        <DialogImage src="/images/msc/about.webp" alt="About" />

        <DialogHeader className="mt-12 sm:mt-10">
          <DialogTitle>About this game</DialogTitle>
          <DialogDescription>
            Adventure game is a idle game where you can build your own town,
            generate resources and upgrade your buildings.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-2 text-sm">
          <p className="font-semibold">Tecnologies</p>

          <ul className="list-disc pl-4">
            <li>
              Made with{' '}
              <a
                href="https://react.dev/"
                className="underline hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                React
              </a>
            </li>
            <li>
              Styling with{' '}
              <a
                href="https://tailwindcss.com/"
                className="underline hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Tailwind
              </a>{' '}
            </li>
            <li>
              Components with{' '}
              <a
                href="https://www.radix-ui.com/"
                className="underline hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Radix UI
              </a>{' '}
            </li>
            <li>
              Icons by{' '}
              <a
                href="https://lucide.dev/"
                className="underline hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Lucide
              </a>{' '}
            </li>
            <li>
              State management with{' '}
              <a
                href="https://jotai.org/"
                className="underline hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Jotai
              </a>{' '}
            </li>
            <li>
              Images by{' '}
              <a
                href="https://www.adobe.com/products/firefly.html"
                className="underline hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Adobe Firefly
              </a>{' '}
            </li>
          </ul>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Close About</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
