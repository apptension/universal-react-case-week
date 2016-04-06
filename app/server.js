import 'babel-polyfill';
import koa from 'koa';
import React from 'react';

try {
  const app = koa();
  const hostname = process.env.HOSTNAME || 'localhost';
  const port = process.env.PORT || 5000;

  app.use(function *() {
    yield ((callback) => {
      /**
       * Iteration 2:
       *  - Render App component to string and inject it into body
       *  - Run server.js application
       */

      this.type = 'text/html';
      this.body = `
        <!doctype html>
        <html>
          <head>
            <meta charset='utf-8' />
            <link rel='icon' type='image/png' href='${require('images/favicon.png')}' sizes='32x32' />
            <title>Marvel Heroes</title>
          </head>
          <body>
            <div id='react-root'></div>
            <script async src="/main.js"></script>
          </body>
        </html>
      `;

      callback(null);
    });
  });

  app.listen(port, () => {
    console.info('==> ?  Server is listening');
    console.info('==> ?  Go to http://%s:%s', hostname, port);
  });
} catch (error) {
  console.error(error.stack || error);
  throw error;
}
