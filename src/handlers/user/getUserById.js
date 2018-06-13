import { UserCommand } from '../../commands';

async function getUserById(ctx, id, userId) {
  try {
    const { error, userInfo } = await UserCommand.getUserById({ id, userId });
    if (error) {
      ctx.status = error.status;
      ctx.body = error.body;
    } else {
      ctx.body = userInfo;
      ctx.status = 200;
    }
  } catch (error) {
    ctx.throw(500, { error });
  }
}

export default getUserById;
