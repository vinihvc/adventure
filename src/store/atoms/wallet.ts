import { atom, useAtomValue } from "jotai";
import { store } from "..";

const walletAtom = atom({
	money: 0,
});

export const useWallet = () => useAtomValue(walletAtom);

export const setMoney = (value: number) => {
	store.set(walletAtom, (prev) => ({
		...prev,
		money: prev.money + value,
	}));
};
