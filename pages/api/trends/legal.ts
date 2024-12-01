import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
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
            title: 'Assinatura Eletrônica de Documentos - GOV.BR',
            url: 'https://www.gov.br/pt-br/servicos/assinatura-eletronica',
          },
          {
            title:
              'Consultar Chaves Pix, Cartões, Contas Bancárias e Empréstimos no meu CPF - Registrato',
            url: 'https://www.bcb.gov.br/meubc/registrato',
          },
          {
            title: 'Consultar Valores a Receber - Banco Central',
            url: 'https://www.gov.br/pt-br/servicos/consultar-e-solicitar-a-devolucao-de-valores-a-receber',
          },
          {
            title: 'Consultar Meu Imposto de Renda - Receita Federal',
            url: 'https://www.gov.br/pt-br/servicos/consultar-meu-imposto-de-renda',
          },
          {
            title: 'Consultar Dívidas e Pendências Fiscais - Receita Federal',
            url: 'https://www.gov.br/pt-br/servicos/consultar-dividas-e-pendencias-fiscais',
          },
          {
            title: 'Emitir Certidão de Regularidade Fiscal - Receita Federal',
            url: 'https://www.gov.br/pt-br/servicos/emitir-certidao-de-regularidade-fiscal',
          },
          {
            title: 'Propor ou Apoiar Ideais Legislativas - Senado Federal ',
            url: 'https://www12.senado.leg.br/ecidadania/principalideia',
          },
          {
            title: 'Opinar em Propostas Legislativas - Câmara dos Deputados ',
            url: 'https://www.camara.leg.br/enquetes/',
          },
          {
            title: 'Consultar Gastos Parlamentares - Câmara dos Deputados',
            url: 'https://www.camara.leg.br/transparencia/gastos-parlamentares/',
          },
          {
            title: 'Consultar CPF',
            url: 'https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas',
          },
          {
            title: 'Obter ou Imprimir CPF',
            url: 'https://www.gov.br/pt-br/servicos/obter-cartao-de-cpf',
          },
          {
            title: 'Proteger Meu CPF',
            url: 'https://www.gov.br/pt-br/servicos/impedir-permitir-participacao-do-meu-cpf-no-cadastro-nacional-de-pessoas-juridicas-cnpj',
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
            title: 'Obter Carteira de Trabalho e Previdência Social (CTPS)',
            url: 'https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho',
          },
          {
            title:
              'Fala.BR - Manifestar Solicitação de Acesso à Informação, Denúncia, Elogio, Reclamação ou Sugestão ao Governo',
            url: 'https://falabr.cgu.gov.br/',
          },
          {
            title:
              'LGPD - Abrir Requerimento relacionado à Lei Geral de Proteção de Dados',
            url: 'https://www.gov.br/pt-br/servicos/abrir-requerimento-relacionado-a-lgpd',
          },
          {
            title: 'TSE - Autoatendimento Eleitoral',
            url: 'https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/',
          },
          {
            title: 'Consumidor.gov.br - Abrir Reclamação contra uma Empresa',
            url: 'https://www.consumidor.gov.br/pages/principal/',
          },
          {
            title: 'Portal da Transparência - Consultar Despesas Públicas',
            url: 'https://portaldatransparencia.gov.br/',
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
