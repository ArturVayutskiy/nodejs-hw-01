import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    if (!parsedData.length) return;
    parsedData.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf-8');
  } catch (error) {
    console.log('Something error', error);
  }
};

removeLastContact();
