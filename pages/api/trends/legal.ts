import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const {
    query: { country },
  } = req

  if (country) {
    if (country === 'BR') {
      const mockBrazil: ITrends = {
        title: 'Serviços públicos',
        credits_title: 'Gov.br',
        credits_url: 'https://www.gov.br/pt-br',
        data: [
          {
            title: 'Consultar Valores a Receber',
            url: 'https://www.gov.br/pt-br/servicos/consultar-e-solicitar-a-devolucao-de-valores-a-receber',
          },
          {
            title: 'Consultar Restituição do Imposto de Renda',
            url: 'https://www.gov.br/pt-br/servicos/consultar-restituicao-de-imposto-de-renda',
          },
          {
            title: 'Realizar a Assinatura Eletrônica de Documentos',
            url: 'https://www.gov.br/pt-br/servicos/assinatura-eletronica',
          },
          {
            title: 'Consultar CPF',
            url: 'https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas',
          },
          {
            title: 'Consultar CNPJ',
            url: 'https://www.gov.br/pt-br/servicos/consultar-cadastro-nacional-de-pessoas-juridicas',
          },
          {
            title: 'Inscrever ou Atualizar CNPJ',
            url: 'https://www.gov.br/pt-br/servicos/inscrever-ou-atualizar-cadastro-nacional-de-pessoas-juridicas',
          },
          {
            title: 'Consultar Dívidas e Pendências Fiscais',
            url: 'https://www.gov.br/pt-br/servicos/consultar-dividas-e-pendencias-fiscais',
          },
          {
            title: 'Emitir Certidão de Regularidade Fiscal',
            url: 'https://www.gov.br/pt-br/servicos/emitir-certidao-de-regularidade-fiscal',
          },
          {
            title: 'Obter a Carteira de Trabalho',
            url: 'https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho',
          },
          {
            title: 'Obter CPF',
            url: 'https://www.gov.br/pt-br/servicos/obter-cartao-de-cpf',
          },
          {
            title: 'Esclarecer dúvidas sobre proteção de dados pessoais',
            url: 'https://www.gov.br/pt-br/servicos/esclarecer-duvidas-sobre-protecao-de-dados-pessoais',
          },
          {
            title: 'Obter atendimento eleitoral',
            url: 'https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/',
          },
          {
            title: 'Câmara dos Deputados: opinar em propostas legislativas',
            url: 'https://www.camara.leg.br/enquetes/',
          },
          {
            title: 'Senado: propor e apoiar leis',
            url: 'https://www12.senado.leg.br/ecidadania/principalideia',
          },
          {
            title: 'Governo: manifestar solicitação',
            url: 'https://falabr.cgu.gov.br/',
          },
          {
            title: 'Ver Votos dos Parlamentares',
            url: 'https://quemfoiquem.org.br/',
          },
        ],
      }

      res.status(200).send(mockBrazil)
    } else {
      let url =
        'https://api.bestbuy.com/beta/products/trendingViewed?apiKey=' +
        process.env.NEXT_PUBLIC_API_BESTBUY

      await axios
        .get(url)
        .then(({ data }) => {
          var a = []

          for (var i in data.results) {
            a.push({
              title: data.results[i]?.names?.title,
              url: data.results[i]?.links?.web,
            })
          }

          const x: ITrends = {
            credits_title: 'Best Buy',
            credits_url: 'https://bestbuy.com/',
            data: a,
          }

          res.status(200).send(x)
        })
        .catch(({ err }) => {
          res.status(400).json({ err })
        })
    }
  } else {
    res.status(405).end('Missing parameters COUNTRY_CODE - ' + country)
  }
}
