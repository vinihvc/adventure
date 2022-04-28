import useSound from 'use-sound'

import { SoundTypeModel } from '@/models/sound'

import { useAppSelector } from '@/hooks/use-redux'

/**
 * Custom hook play sound and respect mute setting
 */
export const useAppSound = (sound: string, type: SoundTypeModel = 'sfx') => {
  const { setting } = useAppSelector((state) => state)

  const [play] = useSound(sound, { soundEnabled: setting[type] })

  return { play }
}
