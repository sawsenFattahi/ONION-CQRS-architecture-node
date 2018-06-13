import Models from '../../infrastructure/database/models';

export default function addUser({ user }) {
  const { UserModel } = Models;
  const doc = new UserModel(user);
  return doc.save();
}
