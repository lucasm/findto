export function isValidUrl(url: string) {
  try {
    new URL(url)
    return true
  } catch (error) {
    return false
  }
}
export function extractDomain(url: string) {
  let hostname

  // find & remove protocol (http, ftp...) and get hostname
  if (url.indexOf('://') > -1) {
    hostname = url.split('/')[2]
  } else {
    hostname = url.split('/')[0]
  }

  // find & remove port number
  hostname = hostname.split(':')[0]

  // find & remove "?"
  hostname = hostname.split('?')[0]

  // find & remove "www"
  hostname = hostname.replace(/^www\./, '')

  // check filter
  const listDomains = ['.com.br', '.co.uk']

  if (!listDomains.some((item) => url.includes(item))) {
    let hostnames = hostname.split('.')
    hostname = hostnames[hostnames.length - 2] + '.' + hostnames[hostnames.length - 1]
  }

  return hostname
}
