import { PropsWithChildren } from 'react'

type ProgressProps = {
  duration: number
  seconds: number
}

export const Progress = ({
  duration,
  seconds,
  children,
}: PropsWithChildren<ProgressProps>) => {
  const reverseWidth = 100 - (seconds / duration) * 100

  console.log(reverseWidth)

  return (
    <div className="relative w-full bg-gray-200 rounded h-[20px] dark:bg-gray-700">
      <div className="flex justify-center items-center absolute inset-0 text-xs font-bold">
        {children}
      </div>

      <div
        className="bg-green-600 h-[20px] rounded transition-all"
        style={{ width: `${reverseWidth}%` }}
      />
    </div>
  )
}
