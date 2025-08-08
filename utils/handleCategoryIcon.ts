import {
  IconHome,
  IconAI,
  IconWeb,
  IconImage,
  IconVideo,
  IconMusic,
  IconSocial,
  IconLocal,
  IconShopping,
  IconCode,
  IconAcademic,
  IconJob,
  IconNews,
  IconLegal,
  IconFinance,
  IconApps,
  IconGames,
  IconTorrent,
  IconDarknet,
  Icon,
} from '@/components/SvgIcons'

export const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case 'Home':
      return IconHome
    case 'AI':
      return IconAI
    case 'Web':
      return IconWeb
    case 'Image':
      return IconImage
    case 'Videos':
      return IconVideo
    case 'Music':
      return IconMusic
    case 'Social':
      return IconSocial
    case 'Local':
      return IconLocal
    case 'Academic':
      return IconAcademic
    case 'Shopping':
      return IconShopping
    case 'News':
      return IconNews
    case 'Job':
      return IconJob
    case 'Code':
      return IconCode
    case 'Legal':
      return IconLegal
    case 'Apps':
      return IconApps
    case 'Finance':
      return IconFinance
    case 'Games':
      return IconGames
    case 'Torrent':
      return IconTorrent
    case 'Darknet':
      return IconDarknet
    default:
      return Icon
  }
}
