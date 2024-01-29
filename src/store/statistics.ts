import { atomWithStorage } from "jotai/utils";

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
