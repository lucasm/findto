import { ReactSVG } from 'react-svg'

const SvgLoader = ({ url }: { url: string }) => {
  if (!url) return null

  return <ReactSVG src={url} />
}

export default SvgLoader
