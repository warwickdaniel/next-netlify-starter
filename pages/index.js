import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BATH STREET BABES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="bathstreetbabes.com" />
        <p className="description">
          <code>xxx content coming soon 👀</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
