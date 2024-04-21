import { useSettings } from "@/store/atoms/settings";
import useSound from "use-sound";

/**
 * Custom hook play sound and respect mute setting
 */
export const useAppSound = (sound: string) => {
	const { sfx } = useSettings();

	const [play] = useSound(sound, { soundEnabled: sfx });

	return { play };
};
