import { goto } from '$app/navigation';
import { createClient, type AuthChangeEvent, type UserResponse } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from './constants';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

let previousAuthState: string;
supabase.auth.onAuthStateChange((authState: AuthChangeEvent) => {
	if (authState === previousAuthState) return;
	previousAuthState = authState;

	(async () => {
		if (authState === 'SIGNED_OUT' || authState === 'USER_DELETED') user = null;
		else user = await supabase.auth.getUser();
	})();
	if (authState === 'SIGNED_IN') goto('/');
});

let user: UserResponse | null;
async function getUser(): Promise<UserResponse> {
	if (!user) return await supabase.auth.getUser();
	return user;
}

export { supabase, getUser };
