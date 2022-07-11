// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EmailList } = initSchema(schema);

export {
  EmailList
};