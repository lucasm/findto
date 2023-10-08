export interface ITrends {
  title?: string
  credits_title: string
  credits_url: string
  data: ITrendsItem[]
}
export interface ITrendsItem {
  title: string
  url?: string
  image?: string
  rank?: number
}
