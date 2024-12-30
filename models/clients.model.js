import { db } from '../database/connection.database.js';

const create = async ({ }) => {
  const query = {
    text: `
          INSERT INTO login.clients
    `,
    values: [],
  }
}