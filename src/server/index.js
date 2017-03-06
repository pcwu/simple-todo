import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../../webpack.config';
import Todos from './api/todos';
import './db';

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(morgan(':status :method :url HTTP/:http-version :date[iso] :response-time ms'));
app.use(bodyParser.json());

app.use('/api/todos', Todos);
app.use(express.static('static'));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧   Server listening on port %s', 3000);
  }
});
