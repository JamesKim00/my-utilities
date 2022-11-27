import { goto } from '$app/navigation';
import { base } from '$app/paths';

const getLink = (l: string): string => {
	let linkWithBase: string;
	if (l === '') {
		if (base) linkWithBase = base;
		else linkWithBase = '/';
	} else linkWithBase = `${base}/${l}`;
	return linkWithBase;
};

const moveToLink = async (l: string) => goto(getLink(l));

export { getLink, moveToLink };
