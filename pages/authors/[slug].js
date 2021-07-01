import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import {
  tilFilePaths,
  tilsBasedOnParam,
  tilsFilteredOnParam,
  TILS_PATH,
} from '../../utils';

const components = {
  a: Link,
  CodeComponent: dynamic(() => import('../../components/CodeComponent')),
  Head,
};

export default function TilPage(props) {
  return (
    <Layout>
      <h1>Hello</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      {/* <div className="til-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
        {frontMatter.author && (
          <p className="description">Author: {frontMatter.author}</p>
        )}
      </main>
      <footer>
        <nav>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </nav>
      </footer>

      <style jsx>{`
        .til-header h1 {
          margin-bottom: 0;
        }

        .til-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style> */}
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const a = await tilsFilteredOnParam('author', params.slug);
  const tils = [];
  for (const tilFilePath of tilFilePaths) {
    const absPath = path.join(TILS_PATH, tilFilePath);
    const fileContent = fs.readFileSync(absPath);
    const { data, content } = matter(fileContent);
    const mdxSource = await serialize(content, { scope: data });
    const til = {
      data,
      content: mdxSource,
    };
    if (data.author === params.slug) {
      tils.push(til);
    }
  }

  return {
    props: {
      author: params.slug,
      tils,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = tilsBasedOnParam('author');

  return {
    paths,
    fallback: false,
  };
};
