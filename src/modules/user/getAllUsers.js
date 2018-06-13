import Models from '../../infrastructure/database/models';

export default function getAllUsers() {
  const { UserModel } = Models;
  return UserModel.find();
}
