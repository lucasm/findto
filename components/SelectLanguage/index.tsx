import { useRouter } from 'next/router'

export default function SelectLanguage() {
  const router = useRouter()
  const { locale } = router
  // locales, defaultLocale

  function changeLanguage(e: { target: { value: string } }) {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <form>
      <label htmlFor="language" style={{ fontSize: '0' }}>
        Select a language:
      </label>
      <select id="language" onChange={changeLanguage} defaultValue={locale}>
        <option value="en">English (International)</option>
        <option value="pt-BR">Português (Brasil)</option>
      </select>
    </form>
  )
}
