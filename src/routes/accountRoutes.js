import Router from 'koa-router';

import { UserHandler } from '../handlers';

const accountRouters = new Router();
accountRouters.get('/user/:id', ctx => UserHandler.getUser(ctx, ctx.params.id, ctx.headers.userid));
accountRouters.get('/users', ctx => UserHandler.getAllUsers(ctx, ctx.headers.userid));
accountRouters.post('/add', ctx => UserHandler.addUser(ctx, ctx.request.body));

export default accountRouters;
