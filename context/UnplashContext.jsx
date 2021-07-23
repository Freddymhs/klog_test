import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';
// fetch
import 'whatwg-fetch';
import { createApi } from 'unsplash-js';

// CONTEXT
export const UnplashContext = createContext();

// PROVIDER
const UnplashProvider = (props) => {
  console.log('process.env.accessKey:', process.env.ACCESSKEY);
  console.log('process.env.accessKey:', process.env.ACCESSKEY);
  console.log('process.env.accessKey:', process.env.ACCESSKEY);
  console.log('process.env.accessKey:', process.env.ACCESSKEY);
  console.log('process.env.accessKey:', process.env.ACCESSKEY);
  // constatnes
  const [images, setImages] = useState([]);
  // const unsplash = createApi({ accessKey: 'YG9kLg6Zb_StSsdpa_-MVy9tWuok1VvnCK8N7C3OdoA' });

  const unsplash = createApi({ accessKey: process.env.accessKey });
  // funciones
  async function searchOnUnplash(e, inputform) {
    e.preventDefault();
    console.log('se previene el submit');

    console.log('el input actualmente ya tiene:', inputform);
    await unsplash.search.getPhotos({
      query: inputform.imageName,
      // page: 1,
      // perPage: 2,
      // color: 'green',
      // orientation: 'portrait',
    })
      .then((result) => {
        setImages(result.response.results);
      });
  }
  useEffect(() => {
    console.log('UnplashProvider mounted!');
  }, []);

  return (
    <UnplashContext.Provider value={{ images, setImages, searchOnUnplash }}>
      {props.children}
    </UnplashContext.Provider>
  );
};

export default UnplashProvider;
