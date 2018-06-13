import userRepository from '../../repositories/userRepository';
import { UserEvent } from '../../events';

export default async function getAllUsers(data) {
  const { userId } = data;
  const { users } = await userRepository.findAll();

  const {
    usersList,
    error,
  } = await UserEvent.getAllUsers(users, userId);
  return {
    usersList,
    error,
  };
}
