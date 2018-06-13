import { config } from 'dotenv';
import db from './infrastructure/database/connexion';

import app from './app';

config({ path: `${process.cwd()}/.env` });

const PORT = process.env.APPLICATION_PORT || 5040;

try {
  app.listen(PORT, () => {
    console.log(`🐲  server running at port ${PORT}`);
    db.initialize();
  });
} catch (err) {
  console.log(err);
}

