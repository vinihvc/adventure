import land from "@/assets/img/land.png";
import medicine from "@/assets/img/medicine.png";
import ore from "@/assets/img/ore.png";
import potato from "@/assets/img/potato.png";
import time from "@/assets/img/time.png";
import weapon from "@/assets/img/weapon.png";

export type FactoryType =
	| "potato"
	| "land"
	| "ore"
	| "weapon"
	| "medicine"
	| "time-travel";

export const FACTORIES = {
	potato: {
		time: 2000, // 2 seconds
		value: 6,
		buyCost: 6,
		autoCost: 6_000,
		moneyToUnlock: 0,
		image: potato,
	},
	land: {
		time: 4000, // 4 seconds
		value: 12,
		buyCost: 12,
		autoCost: 12_000,
		moneyToUnlock: 12_000,
		image: land,
	},
	ore: {
		time: 6000, // 6 seconds
		value: 24,
		buyCost: 24,
		autoCost: 24_000,
		moneyToUnlock: 24_000,
		image: ore,
	},
	weapon: {
		time: 8000, // 8 seconds
		value: 32,
		buyCost: 32,
		autoCost: 32_000,
		moneyToUnlock: 32_000,
		image: weapon,
	},
	medicine: {
		time: 9000, // 9 seconds
		value: 40,
		buyCost: 40,
		autoCost: 40_000,
		moneyToUnlock: 40_000,
		image: medicine,
	},
	"time-travel": {
		time: 10000, // 10 seconds
		value: 50,
		buyCost: 50,
		autoCost: 50_000,
		moneyToUnlock: 50_000,
		image: time,
	},
};
