export interface ISearchJson {
  name: string
  name_translated: string
  name_trends: string
  active: boolean
  data: ISearch[]
}
export interface ISearchCategory {
  name: string
  name_translated: string
  name_trends: string
  description?: string
  active: boolean
  data: ISearch[]
  youtube_channels: IYoutubeChannels[]
}

export interface ISearch {
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
