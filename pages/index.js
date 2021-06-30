import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { tilFilePaths, TILS_PATH } from "../utils";

export default function Index({ tils }) {
  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>TODAY I LEARNED</h1>
          <ul className={styles.til}>
            {tils.map((til) => (
              <li key={til.filePath}>
                <Link
                  as={`/tils/${til.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/tils/[slug]`}
                >
                  <a className={styles.card}>
                    <h2>{til.data.title} &rarr;</h2>
                    <p>{til.data.description}</p>
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
  const tils = tilFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(TILS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { tils } };
}
