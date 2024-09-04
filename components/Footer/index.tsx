'use client'

import Style from './Footer.module.css'
import Link from 'next/link'
import SvgLogo from '../SvgLogo'
import { IconGitHub, IconX, IconInstagram, IconBluesky } from '../SvgIcons'
import { useTranslations } from 'next-intl'

export default function AppFooter() {
  const year = new Date().getFullYear()
  const t = useTranslations('t')

  return (
    <footer className={Style.footer}>
      <div className={Style.container}>
        <ul>
          <li>
            <figure>
              <Link href="/" title="Findto">
                <SvgLogo />
              </Link>
            </figure>
          </li>
          <li>
            <p>
              <Link href="/">Findto</Link> © {year}
            </p>
          </li>
          <li>
            <Link href="/about">{t('about')}</Link>
          </li>
          <li>
            <Link href="/community">{t('community')}</Link>
          </li>
          <li>
            <a href="https://ko-fi.com/findto" target="_blank" rel="noopener">
              {t('donate')}
            </a>
          </li>
          <li>
            <Link href={t('feedback.url')} target="_blank" rel="noopener">
              {t('feedback.title')}
            </Link>
          </li>
          <li>
            <Link href="/terms">{t('terms')}</Link>
          </li>
          <li>
            <Link href="/privacy">{t('privacy')}</Link>
          </li>
          <li>
            <Link
              href="https://bsky.app/profile/findto.app"
              target="_blank"
              rel="noreferrer"
              aria-label="Bluesky">
              <IconBluesky />
            </Link>
          </li>
          <li>
            <Link
              href="https://x.com/findtoapp"
              target="_blank"
              rel="noreferrer"
              aria-label="X">
              <IconX />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/lucasm/findto"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub">
              <IconGitHub />
            </Link>
          </li>
          <li>
            <Link
              href="https://instagram.com/findtoapp"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram">
              <IconInstagram />
            </Link>
          </li>
        </ul>

        {/* <a
            href="https://discord.gg/XbZcvNuQ6F"
            target="_blank"
            rel="noreferrer"
            title="Discord">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="m8 17-.55 2C5.5 18.5 3.5 17.5 2 16.27 2 11 3.5 7.5 5 5c0 0 2.5-1 4.5-1l.5 1.36a4.82 4.82 0 0 1 4 .14l.5-1.5c2 0 4.5 1 4.5 1 1.5 2.5 3 6 3 11.27A14.68 14.68 0 0 1 16.55 19L16 17" />
              <path d="M7.5 16.5c.73.5 2 1.5 4.5 1.5s3.77-1 4.5-1.5" />
              <circle cx="9" cy="12" r="1" />
              <circle cx="15" cy="12" r="1" />
            </svg>
          </a> */}

        {/* <a
            href="https://linkedin.com/company/findto/"
            target="_blank"
            rel="noopener"
            title="LinkedIn">
            LinkedIn
            <Linkedin />
          </a> */}

        {/* <a
            href="https://facebook.com/findtoapp"
            target="_blank"
            rel="noopener"
            title="Facebook">
            Facebook
            <Facebook />
          </a> */}

        {/* <a
          href="https://youtube.com/findtoapp"
          target="_blank"
          rel="noopener"
          title="YouTube">
          YouTube
          <Youtube />
        </a> */}
      </div>
    </footer>
  )
}
