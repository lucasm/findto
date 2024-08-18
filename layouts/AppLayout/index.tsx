import { AppContextProviders } from '@/components/AppContextProviders'
import Style from './AppLayout.module.css'
import AppHeader from '@/components/Header'

import AppFooter from '@/components/Footer'

export default function LayoutApp({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppContextProviders>
        <div className={Style.layout}>
          <AppHeader />
          <main className={Style.main}>{children}</main>
        </div>
        <AppFooter />
      </AppContextProviders>
    </>
  )
}
