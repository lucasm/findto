import { cookies } from 'next/headers'

export async function getBooleanFromCookie(key: string): Promise<boolean> {
  const value = (await cookies()).get(key)?.value
  if (value === 'false') return false
  return true // fallback default
}
