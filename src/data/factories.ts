export type FactoryType =
	| "potato"
	| "peasant"
	| "knight"
	| "archer"
	| "engineer"
	| "mage";

export const FACTORIES = {
	potato: {
		name: "Potato",
		description: "Produces potatoes to feed your people.",
		time: 2, // 2 seconds
		value: 6,
		buyCost: 6,
		autoCost: 6_000,
		moneyToUnlock: 0,
	},
	peasant: {
		name: "Peasant",
		description: "Peasant of the Kingdom start to harvesting food",
		time: 4, // 4 seconds
		value: 12,
		buyCost: 12,
		autoCost: 12_000,
		moneyToUnlock: 12_000,
	},
	knight: {
		name: "Knight",
		description: "Knight are necessary to protect the kingdom",
		time: 6, // 6 seconds
		value: 24,
		buyCost: 24,
		autoCost: 24_000,
		moneyToUnlock: 24_000,
	},
	archer: {
		name: "Archer",
		description: "Archer provide the escort on the walls of the kingdom",
		time: 8, // 8 seconds
		value: 32,
		buyCost: 32,
		autoCost: 32_000,
		moneyToUnlock: 32_000,
	},
	engineer: {
		name: "Engineer",
		description: "Engineer repair and research new technologies",
		time: 9, // 9 seconds
		value: 40,
		buyCost: 40,
		autoCost: 40_000,
		moneyToUnlock: 40_000,
	},
	mage: {
		name: "Mage",
		description: "Mage generate respect and power for the kingdom",
		time: 10, // 10 seconds
		value: 50,
		buyCost: 50,
		autoCost: 50_000,
		moneyToUnlock: 50_000,
	},
};
