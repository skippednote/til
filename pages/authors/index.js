import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.css';
import { tilFilePaths, TILS_PATH } from '../../utils';
export default function Index({ authors }) {
  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>Authors</h1>
          <ul className={styles.til}>
            {authors.map((author) => (
              <li key={author}>
                <Link href={`/authors/${author}`}>
                  <a className={styles.card}>
                    <p>{author}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    </div>
  );
}

export function getStaticProps() {
  const authorsInTils = tilFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(TILS_PATH, filePath))
    const { data: { author } } = matter(source)

    return  author;
  })

  let authors  = [...new Set(authorsInTils)]
  return { props: { authors } }
}
