import userRepository from '../../repositories/userRepository';
import { UserEvent } from '../../events';

export default async function getUserById(data) {
  const { id, userId } = data;
  const { user } = await userRepository.findById(id);

  const {
    userInfo,
    error,
  } = await UserEvent.getUser(user, userId);
  return {
    userInfo,
    error,
  };
}
