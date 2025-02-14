import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'

export const metadata = {
  title: 'Not Found',
  description: 'Page not found.',
}

export default function NotFound() {
  return (
    <WebsiteLayout>
      <section className="colors">
        <div className={Style.container}>
          <div className={Style.pageTitle}>
            <h1>Not Found</h1>
          </div>
        </div>
      </section>
    </WebsiteLayout>
  )
}
