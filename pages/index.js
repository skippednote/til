import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

export default function Index({ posts }) {
  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
        <h1 className={styles.title}>TODAY I LEARNED</h1>
        <ul className={styles.post}>
          {posts.map((post) => (
            <li key={post.filePath}>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className={styles.card}>
                  <h2>{post.data.title} &rarr;</h2>
                  <p>{post.data.description}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        </main>
      </Layout>
      </div>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
