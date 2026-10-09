import { CountryEntity } from './countries.entity.js';
import { DestinationEntity } from './destinations.entity.js';
import { TourInquiryEntity } from './tour_inquiries.entity.js';
import { TourDeparturePriceEntity } from './tour_departure_prices.entity.js';
import { TourDepartureEntity } from './tour_departures.entity.js';
import { TourEntity } from './tours.entity.js';
import { AuthSessionEntity } from './auth_sessions.entity.js';
import { UserEntity } from './users.entity.js';
import { AuthIdentityEntity } from './auth_identities.entity.js';

const ENTITIES = [
  UserEntity,
  AuthIdentityEntity,
  AuthSessionEntity,
  CountryEntity,
  DestinationEntity,
  TourEntity,
  TourDepartureEntity,
  TourDeparturePriceEntity,
  TourInquiryEntity,
];

export default ENTITIES;
