import React, { useEffect } from 'react';
// import Head from 'next/head';
// import Image from 'next/image'; //  problemas con mi nodev12 en mac m1
import FormSearch from '../components/FormSearch';
import Content from '../components/Content';
import styles from '../styles/Index.module.css';

export default function Index() {
  useEffect(() => {

    // const unsplash = createApi({
    //   accessKey: 'YG9kLg6Zb_StSsdpa_-MVy9tWuok1VvnCK8N7C3OdoA',
    // });
    // unsplash.search.getPhotos({
    //   query: 'cat',
    //   page: 1,
    //   perPage: 10,
    //   color: 'green',
    //   orientation: 'portrait',
    // }).then((result) => {
    //   console.log(result.response.results);
    // });

  }, []);

  return (
    <div className={styles.container}>
      <FormSearch />
      <Content />
    </div>

  );
}
