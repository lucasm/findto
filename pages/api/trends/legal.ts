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
        credits_title: 'Gov.br',
        credits_url: 'https://www.gov.br/pt-br',
        data: [
          {
            title: 'Assinatura Eletrônica (GOV.BR)',
            url: 'https://www.gov.br/pt-br/servicos/assinatura-eletronica',
          },
          {
            title: 'Consultar Chaves Pix e Contas no meu CPF (Registrato)',
            url: 'https://www.bcb.gov.br/meubc/registrato',
          },
          {
            title: 'Consultar Valores a Receber (Banco Central)',
            url: 'https://www.gov.br/pt-br/servicos/consultar-e-solicitar-a-devolucao-de-valores-a-receber',
          },
          {
            title: 'Consultar Meu Imposto de Renda (Receita Federal)',
            url: 'https://www.gov.br/pt-br/servicos/consultar-meu-imposto-de-renda',
          },
          {
            title: 'Consultar Dívidas e Pendências Fiscais (Receita Federal)',
            url: 'https://www.gov.br/pt-br/servicos/consultar-dividas-e-pendencias-fiscais',
          },
          {
            title: 'Emitir Certidão de Regularidade Fiscal (Receita Federal)',
            url: 'https://www.gov.br/pt-br/servicos/emitir-certidao-de-regularidade-fiscal',
          },
          {
            title: 'Propor ou Apoiar Ideais Legislativas (Senado Federal)',
            url: 'https://www12.senado.leg.br/ecidadania/principalideia',
          },
          {
            title: 'Opinar em Propostas Legislativas (Câmara dos Deputados)',
            url: 'https://www.camara.leg.br/enquetes/',
          },
          {
            title: 'Consultar Gastos Parlamentares (Câmara dos Deputados)',
            url: 'https://www.camara.leg.br/transparencia/gastos-parlamentares/',
          },
          {
            title: 'Consultar CPF',
            url: 'https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas',
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
            title: 'Obter ou Imprimir CPF',
            url: 'https://www.gov.br/pt-br/servicos/obter-cartao-de-cpf',
          },
          {
            title: 'Obter ou Atualizar CNPJ',
            url: 'https://www.gov.br/pt-br/servicos/inscrever-ou-atualizar-cadastro-nacional-de-pessoas-juridicas',
          },
          {
            title: 'Obter Carteira de Trabalho e Previdência Social (CTPS)',
            url: 'https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho',
          },
          {
            title:
              'Solicitar Acesso à Informação ou Denúncia, Elogio, Reclamação, Sugestão ao Governo (Fala.BR)',
            url: 'https://falabr.cgu.gov.br/',
          },
          {
            title:
              'Abrir Requerimento relacionado à Lei Geral de Proteção de Dados (LGPD)',
            url: 'https://www.gov.br/pt-br/servicos/abrir-requerimento-relacionado-a-lgpd',
          },
          {
            title: 'Realizar Autoatendimento Eleitoral (TSE)',
            url: 'https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/',
          },
          {
            title: 'Abrir Reclamação contra Empresa (Consumidor.gov.br)',
            url: 'https://www.consumidor.gov.br/pages/principal/',
          },
          {
            title:
              'Consultar Despesas Públicas do Governo (Portal da Transparência)',
            url: 'https://portaldatransparencia.gov.br/',
          },
        ],
      }
      res.status(200).send(mockBrazil)
    }
  } else {
    res.status(405).end('Missing parameters COUNTRY_CODE - ' + country)
  }
}
