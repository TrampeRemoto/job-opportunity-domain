export const isTokenExpired = (exp?: number) =>
	(exp || 0) >= (new Date().getTime() + 1) / 1000;
