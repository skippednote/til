import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import Layout from '../../components/Layout';
import detailsStyles from '../../styles/Details.module.css';
import { tilFilePaths, TILS_PATH } from '../../utils';

const components = {
  a: Link,
  CodeComponent: dynamic(() => import('../../components/CodeComponent')),
  Head,
};

export default function TilPage({ source, frontMatter }) {
  return (
    <div className="container">
      <Layout>
        <div className="main-container">
          <main className={detailsStyles.tilContainer}>
            <div className={detailsStyles.tilHeader}>
              <h1>{frontMatter.title}</h1>
              {frontMatter.description && (
                <p className="description">{frontMatter.description}</p>
              )}
            </div>
            <MDXRemote {...source} components={components} />
            <nav>
              <Link href="/">
                <a className={detailsStyles.tilBackToHome}>Back to home</a>
              </Link>
            </nav>
          </main>
          <div className={detailsStyles.tilBottomContent}>
            {frontMatter.author && (
              <Link
                as={`/authors/${frontMatter.author}`}
                href={`/authors/[slug]`}
              >
                <a className={detailsStyles.contentBottomItem}>
                  {frontMatter.author}
                </a>
              </Link>
            )}
            {frontMatter.category && (
              <Link
                as={`/categories/${frontMatter.category}`}
                href={`/categories/[slug]`}
              >
                <a className={detailsStyles.contentBottomItem}>
                  {frontMatter.category}
                </a>
              </Link>
            )}
            {frontMatter.date && (
              <p className={detailsStyles.contentBottomItem}>
                {frontMatter.date}
              </p>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const tilFilePath = path.join(TILS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(tilFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-prism')],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = tilFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
