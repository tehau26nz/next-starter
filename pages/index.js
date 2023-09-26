import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello and welcome to my Next.js testing page</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          This will be fun :D
        </p>
      </main>
      
      <Footer />
    </div>
  )
}
