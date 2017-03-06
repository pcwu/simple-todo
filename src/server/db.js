/* eslint-disable global-require, no-unused-expressions, no-console */
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import config from './config';

const { DATABASE_URL } = config;

const includModels = () =>
  fs.readdirSync(path.join(__dirname, '/models/'))
  .forEach((file) => {
    /* eslint-disable */
    require(path.join(__dirname, '/models/', file)).default
    console.log(`[Model] ${file.replace('.js', '')} is included`);
  });

mongoose.Promise = global.Promise;
mongoose.connect(DATABASE_URL, (err) => {
  if (err) throw Error(err);
  console.log(`DB connected @ ${DATABASE_URL}`);
  includModels();
});
