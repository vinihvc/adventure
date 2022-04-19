import useCountdown from '@bradgarropy/use-countdown'

type CountdownProps = {
  duration: number
  onFinish: () => void
}

export const Countdown = ({ duration, onFinish }: CountdownProps) => {
  const { formatted } = useCountdown({
    seconds: duration,
    format: 'mm:ss',
    onCompleted: onFinish,
  })

  return <p>{formatted}</p>
}
