import { NextPage } from 'next'
import Head from 'next/head'
import { LightningBoltIcon } from '@heroicons/react/solid'

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Head>
        <title>🚧 Under Construction 🚧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LightningBoltIcon className="w-screen h-screen text-amber-400" />
    </div>
  )
}

export default Home
