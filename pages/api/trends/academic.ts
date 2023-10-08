import type { NextApiRequest, NextApiResponse } from 'next'
import { ITrends } from '../../../interfaces/trends'

export default function endpointAcademic(req: NextApiRequest, res: NextApiResponse) {
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
            { title: 'COVID-19' },
            { title: 'Saúde' },
            { title: 'Família' },
            { title: 'História' },
            { title: 'Gênero' },
            { title: 'Inteligência artificial' },
            { title: 'Idoso' },
            { title: 'Sustentabilidade' },
            { title: 'Teses' },
            { title: 'Aprendizagem' },
            { title: 'Ensino' },
            { title: 'Memória' },
            { title: 'Educação' },
            { title: 'Políticas públicas' },
            { title: 'Medicina' },
            { title: 'Direito' },
            { title: 'Epidemiologia' },
            { title: 'Trabalho' },
            { title: 'Criança' },
            { title: 'Enfermagem' },
            { title: 'Comunicação' },
            { title: 'Obesidade' },
            { title: 'Brasil' },
            { title: 'Qualidade de vida' },
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
            { title: 'COVID-19' },
            { title: 'Molecular Biology' },
            { title: 'Artificial Intelligence' },
            { title: 'Climate Change' },
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
          ],
        }

        break
    }

    res.status(200).send(result)
  } else {
    res.status(405).end('Missing parameters COUNTRY_CODE - ' + country)
  }
}
