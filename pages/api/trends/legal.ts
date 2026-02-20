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
        data: [
          {
            title: 'Assinatura Eletrônica de documentos do GOV.BR',
            url: 'https://www.gov.br/pt-br/servicos/assinatura-eletronica',
          },
          {
            title: 'Abrir reclamação contra empresa no Consumidor.gov.br',
            url: 'https://www.consumidor.gov.br/pages/principal/',
          },
          {
            title: 'Meu Imposto de Renda da Receita Federal',
            url: 'https://www.gov.br/pt-br/servicos/consultar-meu-imposto-de-renda',
          },
          {
            title: 'Restituição da Receita Federal',
            url: 'https://www.gov.br/pt-br/servicos/consultar-restituicao-de-imposto-de-renda',
          },
          {
            title: 'Dívidas e Pendências Fiscais na Receita Federal',
            url: 'https://www.gov.br/pt-br/servicos/consultar-dividas-e-pendencias-fiscais',
          },
          {
            title: 'Certidão de Regularidade Fiscal da Receita Federal',
            url: 'https://www.gov.br/pt-br/servicos/emitir-certidao-de-regularidade-fiscal',
          },
          {
            title: 'Valores a Receber do Banco Central',
            url: 'https://www.gov.br/pt-br/servicos/consultar-e-solicitar-a-devolucao-de-valores-a-receber',
          },
          {
            title: 'Registrato do Banco Central',
            url: 'https://www.bcb.gov.br/meubc/registrato',
          },
          {
            title: 'Relatório de Empréstimos e Financiamentos do Banco Central',
            url: 'https://www.bcb.gov.br/meubc/relatorioemprestimofinanciamento',
          },
          {
            title: 'Extrato do FGTS da Caixa',
            url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/extrato-fgts/Paginas/default.aspx',
          },
          {
            title: 'Meu INSS',
            url: 'https://meu.inss.gov.br/',
          },
          {
            title: 'Meu SUS Digital',
            url: 'https://meususdigital.saude.gov.br/',
          },
          {
            title: 'Apoiar ou Propor Ideais Legislativas no Senado Federal',
            url: 'https://www12.senado.leg.br/ecidadania/principalideia',
          },
          {
            title: 'Opinar em Propostas Legislativas na Câmara dos Deputados',
            url: 'https://www.camara.leg.br/enquetes/',
          },
          {
            title: 'Portal da Transparência do Senado Federal',
            url: 'https://senado.leg.br/transparencia',
          },
          {
            title: 'Portal da Transparência da Câmara dos Deputados',
            url: 'https://camara.leg.br/transparencia',
          },
          {
            title: 'Portal da Transparência do Governo Federal',
            url: 'https://portaldatransparencia.gov.br/',
          },
          {
            title:
              'Acesso à informação, denúncia, crítica ou elogio no Fala.BR',
            url: 'https://falabr.cgu.gov.br/',
          },
          {
            title:
              'Requerimento à Lei Geral de Proteção de Dados (LGPD) via ANPD',
            url: 'https://www.gov.br/pt-br/servicos/abrir-requerimento-relacionado-a-lgpd',
          },
          {
            title: 'Autoatendimento Eleitoral do TSE',
            url: 'https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/',
          },
          {
            title: 'Cartórios de Registro Civil do Brasil',
            url: 'https://www.registrocivil.org.br/',
          },
          {
            title: 'Emitir Passaporte',
            url: 'https://www.gov.br/pt-br/servicos/obter-passaporte-comum-para-brasileiro',
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
            title: 'Obter ou Atualizar CNPJ',
            url: 'https://www.gov.br/pt-br/servicos/inscrever-ou-atualizar-cadastro-nacional-de-pessoas-juridicas',
          },
          {
            title: 'Obter Carteira de Trabalho e Previdência Social (CTPS)',
            url: 'https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho',
          },
        ],
      }
      res.status(200).send(mockBrazil)
    }
  } else {
    res.status(405).end('Missing parameters COUNTRY_CODE - ' + country)
  }
}
