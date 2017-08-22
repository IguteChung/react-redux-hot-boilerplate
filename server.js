import path from 'path';
import webpack from 'webpack';
import express from 'express';
import favicon from 'serve-favicon';
import config from './webpack.config';
import html from './html';

var app = express();
var compiler = webpack(config);

const development = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || development ? 3000 : 8080;

// serve favicon request in memory.
app.use(favicon(path.join(__dirname, 'favicon.ico')));

if (development) {
  // for dev server.
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.get('*', (req, res) => res.send(html(development)));
} else {
  // for production server.
  const dist = path.join(__dirname, "dist");
  app.use(express.static(dist));
  app.get('*', (req, res) => res.send(html(development)));
}

// start the http server.
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:' + port);
});
