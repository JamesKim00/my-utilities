// import { utils, ModeOfOperation, type ByteSource } from 'aes-js';
import { supabase } from '$lib/supabase';
import { getVaultKey } from './utils';

export async function addPassword(info: any) {
	// const vaultKey: ArrayBuffer = await getVaultKey();
	// const secretKey: CryptoKey = await crypto.subtle.importKey(
	// 	'raw',
	// 	vaultKey,
	// 	{ name: 'AES-GCM' },
	// 	true,
	// 	['decrypt', 'encrypt']
	// );

	const vaultKey = await getVaultKey();

	const textBytes = new TextEncoder().encode(JSON.stringify(info));
	const iv = self.crypto.getRandomValues(new Uint8Array(12));
	const encrypted = await self.crypto.subtle.encrypt(
		{ name: 'AES-GCM', iv: iv },
		vaultKey,
		textBytes
	);

	const buf2hex = (b: ArrayBuffer) =>
		[...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('');

	const encryptedHex = buf2hex(encrypted);
	const ivHex = buf2hex(iv.buffer);

	const { data, error } = await supabase
		.from('passwords')
		.insert([{ epds: encryptedHex, iv: ivHex }]);
	if (error) throw error;
	alert('Added password!');

	// const t = buf2hex(encrypted);
	// console.log(t);
	// alert(t);

	// const t2 = hex2buf(t);
	// console.log(t2);
	// alert(t2);

	// await decryptPassword(secretKey, iv, t2);

	// await decryptPassword(secretKey, iv, encrypted);
}

async function decryptPassword(secretKey: CryptoKey, iv: Uint8Array, encrypted: ArrayBuffer) {
	const decrypted = await self.crypto.subtle.decrypt(
		{ name: 'AES-GCM', iv: iv },
		secretKey,
		encrypted
	);
	const text = new TextDecoder().decode(decrypted);

	console.log(text);
	alert(text);
}

export async function seePasswords() {
	const vaultKey: CryptoKey = await getVaultKey();

	const { data, error } = await supabase.from('passwords').select('created_at,epds,iv');
	if (error) throw error;

	const hex2buf = (h: String) =>
		new Uint8Array(h.match(/[\da-f]{2}/gi)!.map((h) => parseInt(h, 16)));

	const info: string[] = [];
	for (let row of data) {
		const encrypted = hex2buf(row['epds']);
		const iv = hex2buf(row['iv']);

		const decrypted = await self.crypto.subtle.decrypt(
			{ name: 'AES-GCM', iv: iv },
			vaultKey,
			encrypted
		);
		const decryptedText = new TextDecoder().decode(decrypted);
		info.push(decryptedText);
	}
	return info;

	return data;
}
