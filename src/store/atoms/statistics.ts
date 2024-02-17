import { atomWithStorage } from "jotai/utils";
import { store } from "..";
import { FactoryType, FACTORIES } from "@/data/factories";
import { useAtomValue } from "jotai";
import { factoriesAtom } from "./factories";

export const statisticsAtom = atomWithStorage("statistics", {
	moneyEarned: 0,
	moneySpent: 0,
	factories: {
		potato: {
			quantity: 0,
			moneySpent: 0,
			moneyEarned: 0,
		},
		land: {
			quantity: 0,
			moneySpent: 0,
			moneyEarned: 0,
		},
		ore: {
			quantity: 0,
			moneySpent: 0,
			moneyEarned: 0,
		},
		weapon: {
			quantity: 0,
			moneySpent: 0,
			moneyEarned: 0,
		},
		medicine: {
			quantity: 0,
			moneySpent: 0,
			moneyEarned: 0,
		},
		"time-travel": {
			quantity: 0,
			moneySpent: 0,
			moneyEarned: 0,
		},
	},
});

export const useStatistics = () => useAtomValue(statisticsAtom);

export const setStatistics = (factory: FactoryType) => {
	const f = { ...FACTORIES[factory], ...store.get(factoriesAtom)[factory] };

	store.set(statisticsAtom, (prev) => ({
		...prev,
		moneyEarned: prev.moneyEarned + f.amount * f.value,
		factories: {
			...prev.factories,
			[factory]: {
				...prev.factories[factory],
				moneyEarned: prev.factories[factory].moneyEarned + f.amount * f.value,
			},
		},
	}));
};
