import { getUser, supabase } from '$lib/supabase';

let argon2: any;
export const argon2Loaded = async (arg2: unknown) => (argon2 = arg2);
export const argon2NotLoaded = () => !(argon2 ? true : false);

let vaultKey: CryptoKey | null = null;
export async function getVaultKey(password: string = '') {
	if (vaultKey) return vaultKey;
	while (!argon2) await new Promise((r) => setTimeout(r, 50));

	const user = (await getUser()).data.user;
	const email = user?.email as string;
	while (!password) {
		const response = prompt('Please enter your master password', 'Master Password');
		if (!response || response === 'Master Password') continue;
		const { error } = await supabase.auth.signInWithPassword({ password: response, email: email });
		if (!error) password = response;
	}
	let salt = user?.user_metadata['salt'];
	if (!salt) {
		salt = generateRandom(10);
		await supabase.auth.updateUser({ data: { name: user?.user_metadata['name'], salt: salt } });
	}

	const hashed: ArrayBuffer = (
		await argon2.hash({
			pass: email + password,
			salt: salt,
			type: argon2.ArgonType.Argon2id,
			hashLen: 16,
			time: 2,
			mem: 1024
		})
	).hash.buffer;

	vaultKey = await crypto.subtle.importKey('raw', hashed, { name: 'AES-GCM' }, true, [
		'decrypt',
		'encrypt'
	]);
	return vaultKey;
}

export function forgetVaultKey() {
	vaultKey = null;
}

function generateRandom(len: number) {
	let arr = new Uint8Array((len || 40) / 2);
	self.crypto.getRandomValues(arr);
	return Array.from(arr, (dec) => dec.toString(16).padStart(2, '0')).join('');
}
