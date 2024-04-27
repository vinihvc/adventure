import { atom, useAtomValue } from "jotai";
import { type FactoryType, FACTORIES } from "@/data/factories";

import { store } from "@/store";
import { mscAtom } from "./msc";

export const factoriesAtom = atom({
	potato: {
		amount: 1,
		isAuto: true,
		isUnlocked: true,
	},
	peasant: {
		amount: 0,
		isAuto: false,
		isUnlocked: false,
	},
	knight: {
		amount: 0,
		isAuto: false,
		isUnlocked: false,
	},
	archer: {
		amount: 0,
		isAuto: false,
		isUnlocked: false,
	},
	engineer: {
		amount: 0,
		isAuto: false,
		isUnlocked: false,
	},
	mage: {
		amount: 0,
		isAuto: false,
		isUnlocked: false,
	},
});

export const useFactory = (factory: FactoryType) => {
	const factories = useAtomValue(factoriesAtom);

	return {
		...FACTORIES[factory],
		...factories[factory],
	};
};

export const setAmount = (factory: FactoryType) => {
	store.set(factoriesAtom, (prev) => ({
		...prev,
		[factory]: {
			...prev[factory],
			amount: prev[factory].amount + store.get(mscAtom).amountToBuy,
		},
	}));
};

export const getAmount = (factory: FactoryType) => {
	const factories = store.get(factoriesAtom);

	return factories[factory].amount;
};

export const upgradeAuto = (factory: FactoryType) => {
	store.set(factoriesAtom, (prev) => ({
		...prev,
		[factory]: {
			...prev[factory],
			isAuto: true,
		},
	}));
};

export const upgradeUnlock = (factory: FactoryType) => {
	store.set(factoriesAtom, (prev) => ({
		...prev,
		[factory]: {
			...prev[factory],
			isUnlocked: true,
		},
	}));
};
