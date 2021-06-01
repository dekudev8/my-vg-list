// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PresentedGame, RawGame, RawGameData, UserCollection, UserGame, User } = initSchema(schema);

export {
  PresentedGame,
  RawGame,
  RawGameData,
  UserCollection,
  UserGame,
  User
};