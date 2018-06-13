import userRepository from '../../repositories/userRepository';
import { UserEvent } from '../../events';

export default async function addUser(data) {
  const { userName } = data;
  const { user, save } = await userRepository.findByName(userName);
  const {
    newUser,
    error,
  } = await save(await UserEvent.addUser(user, data));
  return {
    newUser,
    error,
  };
}
