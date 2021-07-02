import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import Layout from '../../components/Layout';
import { tilFilePaths, TILS_PATH } from '../../utils';

const components = {
  a: Link,
  CodeComponent: dynamic(() => import('../../components/CodeComponent')),
  Head,
};

export default function TilPage({ source, frontMatter }) {
  return (
    <Layout>
      <div className="til-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
        {frontMatter.author && (
          <Link
            href={`/authors/${frontMatter.author}`}
          >
          <a className="description">
            Author: {frontMatter.author}
          </a>
        </Link>
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
      `}</style>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const tilFilePath = path.join(TILS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(tilFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
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
