function validatePassword(password: string): string[] {
	function test(r: string, m: string = '') {
		if (m) return !new RegExp(r, m).test(password);
		return !new RegExp(r).test(password);
	}

	const messages: string[] = [];

	if (test('.*[A-Z].*[A-Z]')) messages.push('Need at least 2 uppercase characters');
	if (test('.*[a-z].*[a-z].*[a-z]')) messages.push('Need at least 3 lowercase characters');
	if (test('.*[0-9].*[0-9]')) messages.push('Need at least 2 numerals');
	if (test('.{8,}')) messages.push('Needs to be of length at least 8');
	if (test('[^a-z0-9 ]', 'i')) messages.push('Need at least 1 special character');

	return messages;
}

export { validatePassword };
