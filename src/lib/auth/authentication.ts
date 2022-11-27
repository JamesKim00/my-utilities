// import { forgetVaultKey, getVaultKey } from '$lib/pwds/utils';
import { supabase } from '$lib/supabase';
import type { User } from '@supabase/supabase-js';
// import { forgetVaultKey, getVaultKey } from '$lib/pwds/passwords';

export async function signin(info: { email: string; password: string }): Promise<User> {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: info['email'],
		password: info['password']
	});
	if (error) throw error;
	return data['user'] as User;
}

export async function signup(info: {
	email: string;
	password: string;
	name: string;
}): Promise<User> {
	const { data, error } = await supabase.auth.signUp({
		email: info['email'] as string,
		password: info['password'] as string,
		options: {
			data: {
				name: info['name'] as string
			}
		}
	});
	if (error) throw error;
	return data['user'] as User;
}

export async function signout() {
	const { error } = await supabase.auth.signOut();
	if (error) throw error;
	// forgetVaultKey();
	location.reload();
}
