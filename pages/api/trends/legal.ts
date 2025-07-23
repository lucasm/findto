import type { NextApiRequest, NextApiResponse } from 'next'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    query: { country },
  } = req

  if (country) {
    if (country === 'BR') {
      const mockBrazil: ITrends = {
        title: 'Serviços públicos',
        credits_title: 'GOV.BR',
        credits_url: 'https://www.gov.br/',
        data: [
          {
            title: 'GOV.BR - Assinatura Eletrônica',
            url: 'https://www.gov.br/pt-br/servicos/assinatura-eletronica',
          },
          {
            title: 'Registrato - Chaves Pix, contas e empréstimos no meu CPF',
            url: 'https://www.bcb.gov.br/meubc/registrato',
          },
          {
            title: 'Consumidor.gov.br - Abrir reclamação contra uma empresa',
            url: 'https://www.consumidor.gov.br/pages/principal/',
          },
          {
            title: 'Banco Central - Valores a Receber',
            url: 'https://www.gov.br/pt-br/servicos/consultar-e-solicitar-a-devolucao-de-valores-a-receber',
          },
          {
            title: 'Receita Federal - Consultar Meu Imposto de Renda',
            url: 'https://www.gov.br/pt-br/servicos/consultar-meu-imposto-de-renda',
          },
          {
            title: 'Receita Federal - Consultar Dívidas e Pendências Fiscais',
            url: 'https://www.gov.br/pt-br/servicos/consultar-dividas-e-pendencias-fiscais',
          },
          {
            title: 'Receita Federal - Emitir Certidão de Regularidade Fiscal',
            url: 'https://www.gov.br/pt-br/servicos/emitir-certidao-de-regularidade-fiscal',
          },
          {
            title: 'Senado - Apoiar ou propor ideais Legislativas',
            url: 'https://www12.senado.leg.br/ecidadania/principalideia',
          },
          {
            title: 'Câmara - Opinar em propostas Legislativas',
            url: 'https://www.camara.leg.br/enquetes/',
          },
          {
            title: 'Câmara - Gastos Parlamentares',
            url: 'https://www.camara.leg.br/transparencia/gastos-parlamentares/',
          },
          {
            title: 'GOV.BR - Portal da Transparência',
            url: 'https://portaldatransparencia.gov.br/',
          },
          {
            title: 'Consultar CPF',
            url: 'https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas',
          },
          {
            title: 'Proteger CPF',
            url: 'https://www.gov.br/pt-br/servicos/impedir-permitir-participacao-do-meu-cpf-no-cadastro-nacional-de-pessoas-juridicas-cnpj',
          },
          {
            title: 'Consultar CNPJ',
            url: 'https://www.gov.br/pt-br/servicos/consultar-cadastro-nacional-de-pessoas-juridicas',
          },
          {
            title: 'Obter ou imprimir CPF',
            url: 'https://www.gov.br/pt-br/servicos/obter-cartao-de-cpf',
          },
          {
            title: 'Obter ou atualizar CNPJ',
            url: 'https://www.gov.br/pt-br/servicos/inscrever-ou-atualizar-cadastro-nacional-de-pessoas-juridicas',
          },
          {
            title: 'Obter Carteira de Trabalho e Previdência Social (CTPS)',
            url: 'https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho',
          },
          {
            title: 'Fala.BR - Acesso à informação, denúncia ou elogio',
            url: 'https://falabr.cgu.gov.br/',
          },
          {
            title:
              'LGPD - Abrir requerimento da Lei Geral de Proteção de Dados',
            url: 'https://www.gov.br/pt-br/servicos/abrir-requerimento-relacionado-a-lgpd',
          },
          {
            title: 'TSE - Autoatendimento Eleitoral',
            url: 'https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/',
          },
          {
            title: 'GOV.BR - Obter Passaporte',
            url: 'https://www.gov.br/pt-br/servicos/obter-passaporte-comum-para-brasileiro',
          },
        ],
      }
      res.status(200).send(mockBrazil)
    }
  } else {
    res.status(405).end('Missing parameters COUNTRY_CODE - ' + country)
  }
}
