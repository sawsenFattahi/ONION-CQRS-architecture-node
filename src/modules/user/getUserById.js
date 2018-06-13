import Models from '../../infrastructure/database/models';

export default function getUserById(id) {
  const { UserModel } = Models;
  return UserModel.findById(id);
}
