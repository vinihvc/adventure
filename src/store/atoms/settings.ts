import { atomWithStorage } from "jotai/utils";
import { store } from "..";
import { useAtomValue } from "jotai";

const settingsAtom = atomWithStorage("settings", {
	music: true,
	sfx: true,
});

export const useSettings = () => useAtomValue(settingsAtom);

export const toggleMusic = () =>
	store.set(settingsAtom, (prev) => ({
		...prev,
		music: !prev.music,
	}));

export const toggleSfx = () =>
	store.set(settingsAtom, (prev) => ({
		...prev,
		sfx: !prev.sfx,
	}));
