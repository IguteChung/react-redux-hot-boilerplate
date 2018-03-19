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
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
} else {
  // for production server.
  const dist = path.join(rootPath, './dist');
  // serve favicon request in memory.
  app.use(favicon(path.join(dist, './favicon.ico')));
  app.use(express.static(dist));
}

// start the http server.
app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening at http://localhost:${port}`);
});
