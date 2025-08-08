import styles from './Card.module.css'

interface CardProps {
  title: string
  onClick?: () => void
  imageUrl?: string
  imageAspectRatio?: '16/9'
  author?: string
  description?: string
}

const Card = ({
  imageUrl,
  author,
  title,
  description,
  onClick,
}: Readonly<CardProps>) => {
  return (
    <button className={styles.card} onClick={onClick}>
      {author && <span className={styles.author}>{author}</span>}
      {imageUrl && (
        <figure
          className={`${styles.image} ${styles.youTube ? 'youtubeCard' : ''}`}>
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
