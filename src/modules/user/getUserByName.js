import Models from '../../infrastructure/database/models';

export default function getUserByName(userName) {
  const { UserModel } = Models;
  return UserModel.findOne({ userName });
}
