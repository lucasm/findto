import Style from '../styles/App.module.css'
import LayoutApp from '../components/app/LayoutApp'
import SearchApp from '../components/app/SearchApp'
import WidgetTrends from '../components/app/WidgetTrends'
import WidgetPrivacy from '../components/app/WidgetPrivacy'

export default function Index() {
  return (
    <LayoutApp
      title="AI decentralized web search"
      description="Findto is a decentralized web search app with AI, privacy and diverse sources.">
      <SearchApp />

      <section className={Style.widgetContainer}>
        <WidgetTrends />
        <WidgetPrivacy />
      </section>
    </LayoutApp>
  )
}
