import { AssetCommand } from '../../commands';

async function addSkill(ctx, skill) {
  try {
    const { error, newSkill } = await AssetCommand.addSkill(skill);
    if (error) {
      ctx.status = error.status;
      ctx.body = error.message;
    } else {
      ctx.status = 200;
      ctx.body = newSkill;
    }
  } catch (error) {
    ctx.throw(500, { error });
  }
}

export default addSkill;
