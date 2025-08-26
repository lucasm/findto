import styles from './Card.module.css'

interface CardProps {
  title: string
  onClick?: () => void
  imageUrl?: string
  imageAspectRatio?: 'aspectRatioVideo'
  flexDirection?: 'row' | 'column'
  author?: string
  description?: string
}

const Card = ({
  imageUrl,
  author,
  title,
  description,
  onClick,
  imageAspectRatio,
  flexDirection,
}: Readonly<CardProps>) => {
  return (
    <button
      className={`${styles.card} ${flexDirection ? styles[flexDirection] : ''}`}
      onClick={onClick}>
      {author && <span className={styles.author}>{author}</span>}
      {imageUrl && (
        <figure
          className={`${styles.image} ${imageAspectRatio ? styles[imageAspectRatio] : ''}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="" />
        </figure>
      )}
      <div>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </button>
  )
}

export default Card
