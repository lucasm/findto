import axios from 'axios'

// fetcher GET for SWR
export const fetcher = (url: string) => axios.get(url).then((res) => res.data)
