import 'babel-polyfill';
import koa from 'koa';
import React from 'react';
import * as ReactRouter from 'react-router';
import Transmit from 'react-transmit';

import routes from 'routes';

try {
  const app = koa();
  const hostname = process.env.HOSTNAME || 'localhost';
  const port = process.env.PORT || 5000;

  app.use(function *() {
    yield ((callback) => {
      const location = this.path;

      ReactRouter.match({routes, location}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          this.redirect(redirectLocation.pathname + redirectLocation.search, '/');
          return;
        }

        if (error || !renderProps) {
          callback(error);
          return;
        }

        const RootProvider = React.createClass({
          render () {
            return <ReactRouter.RouterContext {...this.props} />;
          }
        });

        Transmit.renderToString(RootProvider, renderProps).then(({reactString, reactData}) => {
          let favicon = require('images/favicon.png');
          let template = (
            `<!doctype html>
            <html>
              <head>
                <meta charset='utf-8' />
                <link rel='icon' type='image/png' href='${favicon}' sizes='32x32' />
                <title>Marvel Heroes</title>
              </head>
              <body>
                <div id='react-root'>${reactString}</div>
              </body>
            </html>`
          );

          this.type = 'text/html';
          this.body = Transmit.injectIntoMarkup(template, reactData, [`/main.js`]);

          callback(null);
        }).catch(e => {
          callback(e);
        });
      });
    });
  });

  app.listen(port, () => {
    console.info('==> ?  Server is listening');
    console.info('==> ?  Go to http://%s:%s', hostname, port);
  });
}
catch (error) {
  console.error(error.stack || error);
  throw error;
}
