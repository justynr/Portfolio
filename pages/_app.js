import '../styles/index.css';
import Nprogress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import { MenuStateProvider } from '../lib/menuState';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => Nprogress.start());
Router.events.on('routeChangeComplete', () => Nprogress.done());
Router.events.on('routeChangeError', () => Nprogress.done());

function MyApp({ Component, pageProps }) {
  return (
    <MenuStateProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </MenuStateProvider>
  );
}

export default MyApp;
