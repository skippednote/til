import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import Card from '../components/Card'
import styles from "../styles/Home.module.css";
import { tilFilePaths, TILS_PATH } from "../utils";

export default function Index({ tils }) {
  return (
    <div className='container'>
      <Layout>
        <main className={styles.main}>
          <div className='main-container'>
            <h1 className={styles.title}>Recent TILs</h1>
            <ul className='list'>
              {tils.map((til) => (
                <Card key={til.filePath} filepath={til.filePath} data={til.data} />
              ))}
            </ul>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export function getStaticProps() {
  const tils = tilFilePaths.map((filePath) => {
    console.log(filePath);
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
