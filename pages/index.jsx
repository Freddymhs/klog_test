import React, { useEffect } from 'react';
// import Head from 'next/head';
// import Image from 'next/image'; //  problemas con mi nodev12 en mac m1
import FormSearch from '../components/FormSearch';
import Content from '../components/Content';
import styles from '../styles/Index.module.css';

export default function Index() {
  useEffect(() => {
    console.log('index mounted');
  }, []);

  return (
    <div className={styles.container}>
      <FormSearch />
      <Content />
    </div>

  );
}
