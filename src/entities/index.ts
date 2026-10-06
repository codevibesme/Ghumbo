import { CountryEntity } from './countries.entity.js';
import { DestinationEntity } from './destinations.entity.js';
import { TourInquiryEntity } from './tour_inquiries.entity.js';
import { TourDeparturePriceEntity } from './tour_departure_prices.entity.js';
import { TourDepartureEntity } from './tour_departures.entity.js';
import { TourEntity } from './tours.entity.js';
import { UserDocumentEntity } from './user_documents.entity.js';
import { UserSessionEntity } from './user_sessions.entity.js';
import { UserEntity } from './users.entity.js';

const ENTITIES = [
  UserEntity,
  UserDocumentEntity,
  UserSessionEntity,
  CountryEntity,
  DestinationEntity,
  TourEntity,
  TourDepartureEntity,
  TourDeparturePriceEntity,
  TourInquiryEntity,
];

export default ENTITIES;
