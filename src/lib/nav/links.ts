import { goto } from '$app/navigation';
import { base } from '$app/paths';

// const getLink = (l: string): string => {
// 	let linkWithBase: string;
// 	if (l === '') {
// 		if (base) linkWithBase = base;
// 		else linkWithBase = '/';
// 	} else linkWithBase = `${base}/${l}`;
// 	return linkWithBase;
// };

const moveToLink = async (l: string) => {
	let link: string;
	if (l === '' || l === '/') {
		if (base) link = base;
		else link = '/';
	} else link = `${base}/${l}`;
	goto(link);
};

const containsLink = (page: string, link: string): boolean => {
	if (link === '') {
		if (base) link = base;
		else link = '/';
		return page === link;
	}
	return page.includes(link);
};

export { moveToLink, containsLink };
