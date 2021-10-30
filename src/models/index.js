// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Stock } = initSchema(schema);

export {
  Stock
};