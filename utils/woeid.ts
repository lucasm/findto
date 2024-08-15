type CountryCode = 'BR' | 'US' | 'CA' | 'GB' // Adicione outros códigos conforme necessário

type WoeidMapping = {
  [key in CountryCode]: string // Definimos que o WOEID será uma string
}

const woeidMapping: WoeidMapping = {
  BR: '23424768',
  US: '23424977',
  CA: '23424775',
  GB: '23424975',
  // Adicione outros country codes e seus WOEIDs correspondentes aqui
}

export function getWoeid(countryCode: string | string[]): string | null {
  // Verifica se o countryCode é um array
  if (Array.isArray(countryCode)) {
    // Caso seja um array, pegue o primeiro elemento
    countryCode = countryCode[0]
  }

  const upperCaseCode = countryCode.toUpperCase() as CountryCode
  return woeidMapping[upperCaseCode] || null
}
