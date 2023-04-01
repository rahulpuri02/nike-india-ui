import HeroBanner from '@/components/HeroBanner'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Nike. Just Do It. Nike IN</title>
        <meta name="description" content="Inspiring the world's athletes, Nike delivers innovative products, experiences and services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <HeroBanner />
      </main>
    </>
  )
}
