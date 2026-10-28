import type { Session } from '@supabase/supabase-js'
import { supabase, unwrap } from '@/lib/supabase'
import type { Profile } from '@/lib/types'

/** Staff log in with a username; Supabase Auth needs an email, so we map one. */
const EMAIL_DOMAIN = 'laundry.local'

export function usernameToEmail(username: string): string {
  return `${username.trim().toLowerCase()}@${EMAIL_DOMAIN}`
}

export async function signIn(username: string, password: string): Promise<void> {
  const { error } = await supabase.auth.signInWithPassword({ email: usernameToEmail(username), password })
  if (error) throw new Error(error.message === 'Invalid login credentials' ? 'Invalid username or password' : error.message)
}

export async function signOut(): Promise<void> {
  await supabase.auth.signOut()
}

export async function getSession(): Promise<Session | null> {
  const { data } = await supabase.auth.getSession()
  return data.session
}

export function onSessionChange(cb: (session: Session | null) => void): () => void {
  const { data } = supabase.auth.onAuthStateChange((_event, session) => cb(session))
  return () => data.subscription.unsubscribe()
}

export async function fetchProfile(userId: string): Promise<Profile> {
  return unwrap(await supabase.from('profiles').select('*').eq('id', userId).single())
}
