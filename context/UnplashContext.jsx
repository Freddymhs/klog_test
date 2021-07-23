import React, { createContext, useState, useEffect } from 'react';

// fetch
import 'whatwg-fetch';
import { createApi } from 'unsplash-js';

// CONTEXT
export const UnplashContext = createContext();

// PROVIDER
const UnplashProvider = (props) => {
  // constatnes
  const [images, setImages] = useState([]);
  const unsplash = createApi({ accessKey: process.env.API_KEY });
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
