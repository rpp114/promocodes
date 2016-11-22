/* eslint  react/no-danger: 0*/
import React from 'react';


const Layout = props => (
  <html lang="en-US">
    <head>
      <title>Promo Codes</title>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: props.children }} />
      <script src="bundle.js" charSet="utf-8" />
    </body>
  </html>
);

Layout.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default Layout;
