export interface ITrends {
  credits_title: string
  credits_url: string
  data: ITrendsItem[]
}
export interface ITrendsItem {
  title: string
  url?: string
  rank?: number
}