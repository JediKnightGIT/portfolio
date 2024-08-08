import { LocalePrefix, Pathnames } from "next-intl/routing"

export const locales = ["ru", "en"] as const;

export type Locales = typeof locales

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/resume": "/resume",
  "/work": "/work",
}

export const localePrefix: LocalePrefix<Locales> = "always"