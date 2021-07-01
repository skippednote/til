import Link from 'next/link'
import cardStyles from '../styles/Cards.module.css'
import { formatDate } from '../utils/format-date'

const Card = ({ filepath, data, key }) => {
  const { date, title, description, category, author } = data;
  const {day, month, year } = formatDate(date);
  return (
    <li key={key} className={cardStyles.card}>
      <p className={cardStyles.date}><span className={cardStyles.cardDate}>{day}</span><span className={cardStyles.cardMonthYear}>{month} {year}</span></p>
    <div className={cardStyles.cardContent}>
      <Link
        as={`/tils/${filepath.replace(/\.mdx?$/, "")}`}
        href={`/tils/[slug]`}
      >
        <a className={cardStyles.cardTitle}>
          <h2 className={cardStyles.cardHeading}>{title}</h2>
        </a>
      </Link>
      <p className={cardStyles.cardDescription}>{description}</p>
    </div>
    <div className={cardStyles.cardTags}>
      <Link
        as={`/tils/${filepath.replace(/\.mdx?$/, "")}`}
        href={`/tils/[slug]`}
      >
        <a className={cardStyles.cardCategory}>{category}</a>
      </Link>
      <Link
        as={`/tils/${filepath.replace(/\.mdx?$/, "")}`}
        href={`/tils/[slug]`}
      >
        <a className={cardStyles.cardAuthor}>{author}</a>
      </Link>
    </div>
    </li>
  )
}

export default Card;