import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
import Card from '../../components/Card'
import {
  tilFilePaths,
  tilsBasedOnParam,
  tilsFilteredOnParam,
  TILS_PATH,
} from "../../utils";

const components = {
  a: Link,
  CodeComponent: dynamic(() => import("../../components/CodeComponent")),
  Head,
};

export default function TilPage(props) {
  {props.tils.map((til) => (
    console.log(/[^/]*$/.exec(til.absPath.replace(/\.mdx?$/, ""))[0])
  )) }
  return (
    <div className='container'>
      <Layout>
        <div className='main-container'>
          <main className={styles.main}>
            <h2 className={styles.title}>{ props.category}</h2>
            <ul>
              {props.tils.map((til) => (
               <Card key={til.filePath} filepath={`${/[^/]*$/.exec(til.absPath.replace(/\.mdx?$/, ""))[0]}`} data={til.data} />
              ))}
            </ul>
          </main>  
        </div>  
      </Layout>
    </div>  
  );
}

export const getStaticProps = async ({ params }) => {
  const a = await tilsFilteredOnParam("category", params.slug);
  const tils = [];
  for (const tilFilePath of tilFilePaths) {
    const absPath = path.join(TILS_PATH, tilFilePath);
    const fileContent = fs.readFileSync(absPath);
    const { data, content } = matter(fileContent);
    const mdxSource = await serialize(content, { scope: data });
    const til = {
      data,
      absPath,
      content: mdxSource,
    };
    if (data.category === params.slug) {
      tils.push(til);
    }
  }

  return {
    props: {
      category: params.slug,
      tils,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = tilsBasedOnParam("category");

  return {
    paths,
    fallback: false,
  };
};
