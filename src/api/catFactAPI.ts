const catFactsApiUrl = 'https://catfact.ninja/fact';

export const getCatFact = async (): Promise<string> => {
	const res = await fetch(catFactsApiUrl);
	const catFact = await res.json();
	return catFact.fact;
};
