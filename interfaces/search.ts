export interface ISearchCategory {
  name: string
  name_translated?: string
  name_trends?: string
  name_seo?: string
  description?: string
  active: boolean
  data: ISearch[]
  youtube_channels?: IYoutubeChannels[]
}

export interface ISearch {
  id?: string
  name: string
  action: string
  query: string | boolean
  color: string
  child?: ISearchChild[]
  additional?: string
}

export interface ISearchChild {
  name: string
  action: string
  query?: string
  additional?: string
}
export interface IYoutubeChannels {
  title: string
  id: string
}
