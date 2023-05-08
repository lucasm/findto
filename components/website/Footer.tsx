import Style from '../../styles/Website.module.css'
import Link from 'next/link'
import { Twitter, Instagram, GitHub } from 'react-feather'

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div className="container">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contribute">Contribute</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/terms">Terms</Link>
          </li>
        </ul>

        <ul>
          <li>
            <p>
              Findto by{' '}
              <a href="https://lucasm.dev/?utm_source=findto_app" target="_blank" rel="noreferrer">
                Lucas Menezes
              </a>{' '}
              & community
            </p>
          </li>

          <div className={Style.socialIcons}>
            <a
              href="https://twitter.com/findtoapp"
              target="_blank"
              rel="noreferrer"
              title="Twitter">
              <Twitter />
            </a>
            <a
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
            </a>
            <a
              href="https://instagram.com/findtoapp"
              target="_blank"
              rel="noreferrer"
              title="Instagram">
              <Instagram />
            </a>
            <a
              href="https://github.com/lucasm/findto"
              target="_blank"
              rel="noreferrer"
              title="GitHub">
              <GitHub />
            </a>

            {/* <a href="https://linkedin.com/company/findto/" target="_blank" rel="noopener" title="LinkedIn">LinkedIn
                  <Icon.Linkedin/>
               </a>

               <a href="https://facebook.com/findtoapp" target="_blank" rel="noopener" title="Facebook">Facebook
                  <Icon.Facebook/>
               </a>

               <a href="https://youtube.com/findtoapp" target="_blank" rel="noopener" title="YouTube">YouTube
                  <Icon.Youtube/>
               </a>

                */}
          </div>
        </ul>
      </div>
    </footer>
  )
}
