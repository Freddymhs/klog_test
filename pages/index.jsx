import React from 'react';
import Head from 'next/head';
// import Image from 'next/image'; //  problemas con mi nodev12 en mac m1
import styles from '../styles/Index.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="buscador de imagens" content="mi buscador de imagens" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.section}>

        {/* input para ingresar textos */}
        <input className={styles.inputSection} type="text" />
        1
        {/* boton para accionar busqueda */}
        <input className={styles.buttonSection} type="button" />

      </div>

      <div className={styles.content}>
        {/* area para mostrar imagenes */}
        <div className={styles.imageContent} id="area">

          <img src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Girl in a jacket" />
          {/* <Image
            // loader={myLoader}
            // src="me.png"
            src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="Picture of the author"
            width={500}
            height={500}
          /> */}

        </div>
      </div>

    </div>
  );
}
