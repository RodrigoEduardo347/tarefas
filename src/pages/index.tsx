import Head from 'next/head';
import styles from '../../styles/home.module.css';
import Image from 'next/image';
import heroImg from '../../public/assets/hero.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.logoContent}>
            <Image
              className={styles.hero}
              alt="Logo tarefas+"
              src={heroImg}
              priority
            />
          </div>
          <h1 className={styles.title}>
            Sistema feito para você organizar <br />
            seus estudos e tarefas
          </h1>

          <div className={styles.infoContent}>
            <section className={styles.box}>
              <span>+12 posts</span>
            </section>
            <section className={styles.box}>
              <span>+90 comentaários</span>
            </section>
          </div>

        </main>
      </div>
    </>
  )
}
