const VALUE_RANGE = [
	{ value: 1, symbol: "" },
	{ value: 1e3, symbol: "k" },
	{ value: 1e6, symbol: "M" },
	{ value: 1e9, symbol: "B" },
	{ value: 1e12, symbol: "T" },
	{ value: 1e15, symbol: "AA" },
	{ value: 1e18, symbol: "BB" },
	{ value: 1e21, symbol: "CC" },
	{ value: 1e24, symbol: "DD" },
	{ value: 1e27, symbol: "EE" },
	{ value: 1e30, symbol: "FF" },
	{ value: 1e33, symbol: "GG" },
	{ value: 1e36, symbol: "HH" },
	{ value: 1e39, symbol: "II" },
	{ value: 1e42, symbol: "JJ" },
	{ value: 1e45, symbol: "KK" },
	{ value: 1e48, symbol: "LL" },
	{ value: 1e51, symbol: "MM" },
	{ value: 1e54, symbol: "NN" },
	{ value: 1e57, symbol: "OO" },
	{ value: 1e60, symbol: "PP" },
	{ value: 1e63, symbol: "QQ" },
	{ value: 1e66, symbol: "RR" },
	{ value: 1e69, symbol: "SS" },
	{ value: 1e72, symbol: "TT" },
	{ value: 1e75, symbol: "UU" },
	{ value: 1e78, symbol: "VV" },
	{ value: 1e81, symbol: "WW" },
	{ value: 1e84, symbol: "XX" },
	{ value: 1e87, symbol: "YY" },
	{ value: 1e90, symbol: "ZZ" },
	{ value: 1e93, symbol: "AAA" },
	{ value: 1e96, symbol: "BBB" },
	{ value: 1e99, symbol: "CCC" },
	{ value: 1e102, symbol: "DDD" },
	{ value: 1e105, symbol: "EEE" },
	{ value: 1e108, symbol: "FFF" },
	{ value: 1e111, symbol: "GGG" },
	{ value: 1e114, symbol: "HHH" },
	{ value: 1e117, symbol: "III" },
	{ value: 1e120, symbol: "JJJ" },
	{ value: 1e123, symbol: "KKK" },
];

export const amountFormatter = (amount: number) => {
	const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;

	const item = VALUE_RANGE.slice()
		.reverse()
		.find((item) => amount >= item.value);

	if (item) {
		const formattedValue = amount / item.value;
		return `${formattedValue.toFixed(2).replace(regex, "$1")}${item.symbol}`;
	}

	return "0";
};
