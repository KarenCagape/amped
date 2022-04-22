import * as React from 'react';
import GlobalStyles from './global-styles';
import Footer from './footer';
import Nav from './nav';
import Vision from './vision';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Layout({ pageTitle, children }) {
  return (
    <div className="MAIN-CONTAINER">
      <GlobalStyles />
      <title>{pageTitle}</title>
      <Nav />
      <main>
        {children}
        <Vision />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
