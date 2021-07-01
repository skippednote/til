import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
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
    <Layout>
      <ul className={styles.til}>
        {props.tils.map((til) => (
          <li key={til.data.title}>
            <Link
              as={`/tils/${/[^/]*$/.exec(til.absPath.replace(/\.mdx?$/, ""))[0]}`}
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
    </Layout>
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
