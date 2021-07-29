export const kebabToCamel = (kebab: string) => {
	const arr = kebab.split("-");

	const capital = arr.map(
		item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(),
	);

	return capital.join("");
};
