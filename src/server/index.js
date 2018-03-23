import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import favicon from 'serve-favicon';
import config from './webpack.config';

const app = express();
const development = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || development ? 3000 : 8080;
const rootPath = path.resolve(__dirname, '../../');

if (development) {
  // for dev server.
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
  // serve index.html for undefined route.
  app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      return res.end();
    });
  });
} else {
  // for production server.
  const client = path.join(rootPath, './dist/client');
  // serve favicon request in memory.
  app.use(favicon(path.join(client, './favicon.ico')));
  app.use(express.static(client));
  // serve index.html for undefined route.
  app.use('*', express.static(path.join(client, './index.html')));
}

// start the http server.
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Listening at http://localhost:${port}`);
});
