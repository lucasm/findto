import Style from '../../styles/Website.module.css'
import Link from 'next/link'
import { Twitter, Instagram, GitHub } from 'react-feather'

export default function Footer() {
  return (
    <footer className={Style.footer}>
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
          <a href="https://twitter.com/findtoapp" target="_blank" rel="noreferrer" title="Twitter">
            <Twitter />
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

               <a href="https://medium.com/@findtoapp" target="_blank" rel="noopener" title="Medium">Medium
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M2.13,5.3a.69.69,0,0,0-.22-.59l-1.68-2v-.3H5.45l4,8.85L13,2.38h5v.3L16.56,4.06a.45.45,0,0,0-.16.41V14.59a.43.43,0,0,0,.16.4L18,16.37v.3H10.91v-.3L12.36,15c.14-.14.14-.19.14-.41V6.37l-4,10.27H7.92L3.21,6.37v6.88a1,1,0,0,0,.26.79l1.89,2.3v.3H0v-.3L1.89,14a.91.91,0,0,0,.24-.79Z"/></svg>
               </a>

               <a href="https://dribbble.com/findtoapp" target="_blank" rel="noopener" title="Dribbble">Dribbble
                  <Icon.Dribbble/>
               </a> */}
        </div>
      </ul>
    </footer>
  )
}
