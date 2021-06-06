import Alert from './alert';
import Footer from './footer';
import HamburgerMenu from './HamburgerMenu';
import Meta from './meta';
import Nav from './Nav';
import { GlobalStyles, InnerStyles } from './styles/PageStyles';

export default function Page({ preview, children }) {
  return (
    <>
      <GlobalStyles />
      <Meta />
      <div className="min-h-screen">
        {preview && <Alert preview={preview} />}
        <Nav />
        <HamburgerMenu />
        <InnerStyles>{children}</InnerStyles>
      </div>
      <Footer />
    </>
  );
}
