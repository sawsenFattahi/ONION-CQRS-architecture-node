import Router from 'koa-router';
import accountRoutes from './routes/accountRoutes';
import assetRoutes from './routes/assetRoutes';

const router = new Router();
router.use('/account', accountRoutes.routes(), accountRoutes.allowedMethods());
router.use('/asset', assetRoutes.routes(), assetRoutes.allowedMethods());

export default router;
