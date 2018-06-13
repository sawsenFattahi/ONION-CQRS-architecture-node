import { UserCommand } from '../../commands';

async function addUser(ctx, user) {
  try {
    const { error, newUser } = await UserCommand.addUser(user);
    if (error) {
      ctx.status = error.status;
      ctx.body = error.message;
    } else {
      ctx.status = 200;
      ctx.body = newUser;
    }
  } catch (error) {
    ctx.throw(500, { error });
  }
}

export default addUser;
