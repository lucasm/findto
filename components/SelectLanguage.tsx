import { useRouter } from 'next/router'

export default function SelectLocale() {
  const router = useRouter()
  const { locale } = router

  function changeLanguage(e) {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <form>
      <select onChange={changeLanguage} defaultValue={locale}>
        <option value="en">English (International)</option>
        <option value="pt-BR">Português (Brasil)</option>
      </select>
    </form>
  )
}
