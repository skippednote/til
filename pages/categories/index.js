import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.css';
import { tilFilePaths, TILS_PATH } from '../../utils';

export default function Index({ categories }) {
  return (
    <div className="container">
      <Layout>
        <main className={`${styles.main} main-container`}>
          <h1 className={styles.title}>Categories</h1>
          <ul className={styles.til}>
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/categories/${category}`}>
                  <a className={styles.card}>
                    <p>{category}</p>
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
  const categoriesInTils = tilFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(TILS_PATH, filePath));
    const {
      data: { category },
    } = matter(source);

    return category;
  });

  let categories = [...new Set(categoriesInTils)];
  return { props: { categories } };
}
