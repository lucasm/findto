import styles from './Footer.module.css'
import Link from 'next/link'
import SvgLogo from '../SvgLogo'
import {
  IconGitHub,
  IconX,
  IconInstagram,
  IconBluesky,
  IconDiscord,
  IconLinkedIn,
} from '../SvgIcons'
import { useTranslations } from 'next-intl'

export default function AppFooter() {
  const year = new Date().getFullYear()
  const t = useTranslations('t')

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <li>
            <Link href="/" title="Findto">
              <SvgLogo />
            </Link>
          </li>
          <li>
            <p>
              <Link href="/">Findto</Link> © {year}
            </p>
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
              href="https://x.com/findtoapp"
              target="_blank"
              rel="noreferrer"
              aria-label="X">
              <IconX />
            </Link>
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
              href="https://discord.gg/XbZcvNuQ6F"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord">
              <IconDiscord />
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
          <li>
            <Link
              href="https://linkedin.com/company/findto/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn">
              <IconLinkedIn />
            </Link>
          </li>

          <li>
            <Link href="/about">{t('about')}</Link>
          </li>
          {/* <li>
            <Link href="/community">{t('community')}</Link>
          </li> */}
          <li>
            <a href="https://patreon.com/findto" target="_blank" rel="noopener">
              {t('donate')}
            </a>
          </li>
          <li>
            <Link href={t('feedback.url')} target="_blank" rel="noopener">
              {t('feedback.title')}
            </Link>
          </li>
          <li>
            <Link href="/privacy">{t('privacy')}</Link>
          </li>
          <li>
            <Link href="/terms">{t('terms')}</Link>
          </li>
          <li>
            <p>
              {t('copyright')}
              <a href="https://lucasm.dev" target="_blank" rel="noopener">
                {' '}
                Lucas Menezes
              </a>
            </p>
          </li>
        </ul>

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
