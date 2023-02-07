interface Props {
  color?: string
  fill?: string
}

export default function SvgLogo(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        className={props.color ? props.color : null}
        style={{
          fill: props.fill ? props.fill : null,
        }}
        d="M242.75,165.71h-.32c-42.05,0-76.42,34.29-76.62,76.43a76.62,76.62,0,0,0,76.43,76.92h.3a77.19,77.19,0,0,0,54-22.23v0a76.58,76.58,0,0,0,.81-108.25A76.76,76.76,0,0,0,242.75,165.71Z"
      />
      <path
        className={props.color ? props.color : null}
        style={{
          fill: props.fill ? props.fill : null,
        }}
        d="M342,0H170A170,170,0,0,0,0,170V342A170,170,0,0,0,170,512H342A170,170,0,0,0,512,342V170A170,170,0,0,0,342,0Zm51.18,392.4-.35.34a27.38,27.38,0,0,1-19.47,8.15,27,27,0,0,1-19.51-8.19L314.7,353.55a131.66,131.66,0,0,1-71.54,21.17H243c-72.65,0-131.84-59.1-132-131.73s59-132,131.74-132.08H243a132,132,0,0,1,132,131.73V243a130.85,130.85,0,0,1-21.16,71.53l39.05,39.16a27.43,27.43,0,0,1,.37,38.73Z"
      />
    </svg>
  )
}
