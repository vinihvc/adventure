import { useSettings } from '@/store/atoms/settings'
import useSoundHook from 'use-sound'

/**
 * Play sound effect, it follows sfx setting
 */
export const useSound = (file: string) => {
  const { sfx } = useSettings()

  const [play] = useSoundHook(file, { soundEnabled: sfx, volume: 0.5 })

  return { play }
}
