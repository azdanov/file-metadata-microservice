import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import express from 'express';
import multer from 'multer';
import path from 'path';

import * as homeController from './controllers/home';
import * as sizeController from './controllers/size';
import { errorHandler } from './handlers/errors';

const app = express();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5000000 },
}).single('file');

const csrfProtection = csurf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development');
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(cookieParser());

app.get('/', csrfProtection, homeController.index);

app.get('/size', sizeController.index);
app.post('/size', upload, parseForm, csrfProtection, sizeController.size);

app.use(errorHandler);

export default app;
