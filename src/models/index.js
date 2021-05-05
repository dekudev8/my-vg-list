// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Collection, Game, User } = initSchema(schema);

export {
  Collection,
  Game,
  User
};