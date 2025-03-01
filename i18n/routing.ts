import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { defaultLocale, locales } from '@/utils/locales'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
