import React, { createContext, useState, useEffect } from 'react';

// CONTEXT
export const SearchContext = createContext();

// PROVIDER
const SearchProvider = (props) => {
  // constantes
  const [input, setInput] = useState({ imageName: 'cat' });
  // funciones
  function saveInput(e) {
    setInput({ [e.target.name]: e.target.value });
    console.log(input);
  }

  useEffect(() => {
    console.log('inputs context mounted!');
  }, []);

  return (
    <SearchContext.Provider value={{
      input, setInput, saveInput,
    }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
