import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Today I learned</title>
        <meta name="description" content="Today I learned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">{children}</div>
      <style jsx>{`
        .wrapper {
          max-width: 50rem;
          margin: 0 auto;
          padding: 1.5rem;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }

        :root {
          --site-color: royalblue;
          --divider-color: rgba(0, 0, 0, 0.4);
        }

        html {
          font: 100%/1.5 system-ui;
        }

        a {
          color: inherit;
          text-decoration-color: var(--divider-color);
          text-decoration-thickness: 2px;
        }

        a:hover {
          color: var(--site-color);
          text-decoration-color: currentcolor;
        }

        h1,
        p {
          margin-bottom: 1.5rem;
        }

        code {
          font-family: 'Menlo';
        }
      `}</style>
    </>
  )
}
