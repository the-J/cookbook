// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Stock, Picture, S3Object } = initSchema(schema);

export {
  Stock,
  Picture,
  S3Object
};