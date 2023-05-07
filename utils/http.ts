import axios from 'axios'

// fetcher GET for SWR
export const fetcher = (url: string) => axios.get(url).then((res) => res.data)

// // Axios (HTTP) - instância padrão com URL da API
// export const httpRequest = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   responseType: 'json',
//   timeout: 60000,
//   headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
// })
