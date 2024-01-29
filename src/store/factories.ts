import { atom } from "jotai";
// import { atomWithStorage } from "jotai/utils";

// export const factoriesAtom = atomWithStorage("factories", {
export const factoriesAtom = atom({
	potato: {
		amount: 1,
		isAuto: false,
		isUnlocked: true,
	},
	land: {
		amount: 0,
		isAuto: false,
		isUnlocked: false,
	},
	ore: {
		amount: 0,
		isAuto: false,
		isUnlocked: false,
	},
	weapon: {
		amount: 0,
		isAuto: false,
		isUnlocked: false,
	},
	medicine: {
		amount: 0,
		isAuto: false,
		isUnlocked: false,
	},
	"time-travel": {
		amount: 0,
		isAuto: false,
		isUnlocked: false,
	},
});
