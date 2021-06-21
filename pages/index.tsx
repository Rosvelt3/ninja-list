import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt incidunt vel sint? Eveniet id doloremque quaerat veniam aperiam libero dicta velit minus perspiciatis. Necessitatibus iusto fugit sed perspiciatis minima.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt incidunt vel sint? Eveniet id doloremque quaerat veniam aperiam libero dicta velit minus perspiciatis. Necessitatibus iusto fugit sed perspiciatis minima.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
