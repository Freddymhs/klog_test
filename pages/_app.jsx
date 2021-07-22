import '../styles/globals.css'; // estilos para toda la web importados en app directamente
import SearchProvider from '../context/SearchContext';
import UnplashProvider from '../context/UnplashContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* peticiones a  unplash */}
      <UnplashProvider>
        {/* valores de inputs */}
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
      </UnplashProvider>
    </>

  );
}

export default MyApp;
