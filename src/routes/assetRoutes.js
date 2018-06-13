import Router from 'koa-router';

import { AssetHandler } from '../handlers';

const accountRouters = new Router();
accountRouters.post('/skill/add', ctx => AssetHandler.addSkill(ctx, ctx.request.body));

export default accountRouters;
