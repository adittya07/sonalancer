// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Loader from '../components/Loader'


export default function Home() {
  return (
    <div>
<<<<<<< HEAD
      <div>
        <Loader show />
      </div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: {username:'ak123'}
      }}>
        <a>Arshad oru playgod</a>
      </Link>
=======
      <h1>Hello AK</h1>
>>>>>>> df998dc25b547da4712565d18278a0f91f0cd7eb
    </div>
  )
}