import { atomWithStorage } from "jotai/utils";

export type MscAtom = {
	amountToBuy: 1 | 10 | 50;
};

export const mscAtom = atomWithStorage<MscAtom>("msc", {
	amountToBuy: 1,
});
