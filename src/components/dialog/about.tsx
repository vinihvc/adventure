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

const AboutDialog = () => {
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
            Idleval (Idle + Medieval) is a idle game where you can build your
            own town, generate resources and upgrade your buildings.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-2">
          <p className="font-semibold">Tecnologies</p>

          <ul className="list-disc pl-4">
            <li>
              Made with{' '}
              <a
                href="https://react.dev/"
                className="font-medium underline hover:text-blue-500"
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
                className="font-medium underline hover:text-blue-500"
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
                className="font-medium underline hover:text-blue-500"
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
                className="font-medium underline hover:text-blue-500"
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
                className="font-medium underline hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Jotai
              </a>{' '}
            </li>
            <li>
              Images by{' '}
              <a
                href="https://chatgpt.com"
                className="font-medium underline hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                ChatGPT
              </a>{' '}
            </li>
          </ul>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button size="xl">Close About</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AboutDialog
