import type { NextApiRequest, NextApiResponse } from 'next'
import { ITrends } from '../../../interfaces/trends'

export default function endpoint(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { country },
  } = req

  if (country) {
    let result: ITrends

    switch (country) {
      case 'BR':
        result = {
          credits_title: 'Oasisbr',
          credits_url: 'https://oasisbr.ibict.br/',
          data: [
            { title: 'Clima' },
            { title: 'Inteligência artificial' },
            { title: 'Educação' },
            { title: 'COVID-19' },
            { title: 'Saúde' },
            { title: 'Família' },
            { title: 'História' },
            { title: 'Medicina' },
            { title: 'Sustentabilidade' },
            { title: 'Políticas públicas' },
            { title: 'Qualidade de vida' },
            { title: 'Teses' },
            { title: 'Aprendizagem' },
            { title: 'Ensino' },
            { title: 'Memória' },
            { title: 'Idoso' },
            { title: 'Gênero' },
            { title: 'Direito' },
            { title: 'Epidemiologia' },
            { title: 'Trabalho' },
            { title: 'Criança' },
            { title: 'Comunicação' },
            { title: 'Obesidade' },
            { title: 'Brasil' },
            { title: 'Biologia molecular' },
            { title: 'Machine learning' },
            { title: 'Estatística' },
          ],
        }
        break
      default:
        result = {
          credits_title: 'ResearchGate',
          credits_url: 'https://researchgate.net/',
          data: [
            { title: 'Climate Change' },
            { title: 'Artificial Intelligence' },
            { title: 'Molecular Biology' },
            { title: 'COVID-19' },
            { title: 'Psychology' },
            { title: 'Statistical Analysis' },
            { title: 'Microbiology' },
            { title: 'Education' },
            { title: 'Mathematics' },
            { title: 'Python' },
            { title: 'Mechanical Engineering' },
            { title: 'Physics' },
            { title: 'Journalism' },
            { title: 'Neural Networks' },
            { title: 'Connectivity' },
            { title: 'Agriculture' },
            { title: 'Environmentalism' },
            { title: 'Medicine' },
            { title: 'Economy' },
            { title: 'Ethics' },
            { title: 'Health' },
            { title: 'Social Science' },
            { title: 'Democracy' },
          ],
        }

        break
    }

    res.status(200).send(result)
  } else {
    res.status(405).end('Missing parameters COUNTRY_CODE - ' + country)
  }
}
