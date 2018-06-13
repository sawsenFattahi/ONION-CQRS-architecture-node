import { assetModule } from '../modules';

export default {
  addSkill: async () => (
    {
      save: async (event) => {
        const { payload, error } = event;
        let newSkill;
        if (payload) {
          newSkill = await assetModule.addSkill(payload);
        }
        if (error) {
          console.log('error', error);
        }
        return {
          newSkill,
          error,
        };
      },
    }),
};
