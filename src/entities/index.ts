import { CountryEntity } from './countries.entity.js';
import { DestinationEntity } from './destinations.entity.js';
import { UserDocumentEntity } from './user_documents.entity.js';
import { UserSessionEntity } from './user_sessions.entity.js';
import { UserEntity } from './users.entity.js';

const ENTITIES = [
  UserEntity,
  UserDocumentEntity,
  UserSessionEntity,
  CountryEntity,
  DestinationEntity,
];

export default ENTITIES;
