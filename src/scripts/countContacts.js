import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    return parsedData.length;
  } catch (error) {
    console.log('Something error', error);
  }
};

console.log(await countContacts());
