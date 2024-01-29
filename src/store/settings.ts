import { atomWithStorage } from "jotai/utils";

export const settingsAtom = atomWithStorage("settings", {
	music: true,
	sfx: true,
});
