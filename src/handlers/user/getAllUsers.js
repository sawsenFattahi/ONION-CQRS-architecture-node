import { UserCommand } from '../../commands';

async function getAllUsers(ctx, userId) {
  try {
    const { error, usersList } = await UserCommand.getAllUsers({ userId });
    if (error) {
      ctx.status = error.status;
      ctx.body = error.body;
    } else {
      ctx.body = usersList;
      ctx.status = 200;
    }
  } catch (error) {
    ctx.throw(500, { error });
  }
}

export default getAllUsers;
