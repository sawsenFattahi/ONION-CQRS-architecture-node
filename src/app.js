import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaJsonError from 'koa-json-error';
import { omit } from 'lodash';
import cors from 'koa-cors';
import router from './router';

const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(koaJsonError({
  postFormat: (err, obj) => omit(obj, 'stack'),
}));
app.use(router.routes());
app.use(router.allowedMethods());
app.on('error', (err, ctx) => {
  console.log('server error', err, ctx);
});

export default app;
