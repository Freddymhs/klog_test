import React, { useContext, useEffect } from 'react';
import styles from '../styles/Index.module.css';
// contextos
import { UnplashContext } from '../context/UnplashContext';

const Content = () => {
  const { images } = useContext(UnplashContext);
  useEffect(() => { console.log(images); }, [images]);
  return (

    <div className={styles.content}>
      <div className={styles.imageContent} id="area">

        {images.map((e) => {
          console.log(e);
          return (
            <picture picture>
              <img
                src={e.urls.regular}
                alt="Girl in a jacket"
                className={styles.gallery_img}
              />
            </picture>
          );
        })}

      </div>
    </div>
  );
};

export default Content;
