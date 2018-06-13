import mongoose from 'mongoose';
import config from '../../../config.json';
import Account from '../models/userModel';
import initUser from '../constants';

mongoose.Promise = global.Promise;
function initializeDb() {
  mongoose.connection
    .on('error', (error) => {
      console.error('MongoDB Connection error:', error);
    })
    .on('close', () => {
      console.info('Mongodb closed!');
    })
    .once('open', async () => {
      console.info('✨  Mongodb connected!');
      try {
        const total = await Account.count();
        if (total <= 0) {
          const user = new Account(initUser);
          await user.save();
        }
      } catch (e) {
        console.error(e);
      }
    });
  mongoose.connect(`mongodb://${config.db_config.host}:${config.db_config.port}/${config.db_config.name}`);
}

function disconnectDb() {
  mongoose.disconnect();
}

export default {
  initialize: initializeDb,
  disconnect: disconnectDb,
};
