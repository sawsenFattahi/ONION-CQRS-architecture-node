import { userModule } from '../modules';

export default {
  findById: async id => (
    {
      user: await userModule.getUserById(id),
    }),
  findAll: async () => (
    {
      users: await userModule.getAllUsers(),
    }),
  findByName: async userName => (
    {
      user: await userModule.getUserByName(userName),
      save: async (event) => {
        const { payload, error } = event;
        let newUser;
        if (payload) {
          newUser = await userModule.addUser(payload);
        }
        if (error) {
          console.log('error', error);
        }
        return {
          newUser,
          error,
        };
      },
    }),
};
