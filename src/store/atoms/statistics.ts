import { atomWithStorage } from "jotai/utils";
import { store } from "..";
import { FactoryType } from "@/data/factories";
import { useAtomValue } from "jotai";

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

export const setStatistics = (factory: FactoryType, value: number) => {
	store.set(statisticsAtom, (prev) => ({
		...prev,
		moneyEarned: prev.moneyEarned + value,
		factories: {
			...prev.factories,
			[factory]: {
				...prev.factories[factory],
				moneyEarned: prev.factories[factory].moneyEarned + value,
			},
		},
	}));
};
