import peasantImg from "@/assets/img/peasant.jpg";
import engineerImg from "@/assets/img/engineer.jpg";
import knightImg from "@/assets/img/knight.jpg";
import potatoImg from "@/assets/img/potato.jpg";
import mageImg from "@/assets/img/mage.jpg";
import archerImg from "@/assets/img/archer.jpg";

export type FactoryType =
	| "potato"
	| "peasant"
	| "knight"
	| "archer"
	| "engineer"
	| "mage";

export const FACTORIES = {
	potato: {
		time: 2000, // 2 seconds
		value: 6,
		buyCost: 6,
		autoCost: 6_000,
		moneyToUnlock: 0,
		image: potatoImg,
	},
	peasant: {
		time: 4000, // 4 seconds
		value: 12,
		buyCost: 12,
		autoCost: 12_000,
		moneyToUnlock: 12_000,
		image: peasantImg,
	},
	knight: {
		time: 6000, // 6 seconds
		value: 24,
		buyCost: 24,
		autoCost: 24_000,
		moneyToUnlock: 24_000,
		image: knightImg,
	},
	archer: {
		time: 8000, // 8 seconds
		value: 32,
		buyCost: 32,
		autoCost: 32_000,
		moneyToUnlock: 32_000,
		image: archerImg,
	},
	engineer: {
		time: 9000, // 9 seconds
		value: 40,
		buyCost: 40,
		autoCost: 40_000,
		moneyToUnlock: 40_000,
		image: engineerImg,
	},
	mage: {
		time: 10000, // 10 seconds
		value: 50,
		buyCost: 50,
		autoCost: 50_000,
		moneyToUnlock: 50_000,
		image: mageImg,
	},
};
