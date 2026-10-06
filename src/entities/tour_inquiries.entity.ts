import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  type Relation,
  UpdateDateColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { ETourInquiryStatus } from '../types/tour_inquiries.type.js';
import { TourEntity } from './tours.entity.js';
import { TourDepartureEntity } from './tour_departures.entity.js';
import { UserEntity } from './users.entity.js';

@Entity('tour_inquiries')
@Check('chk_tour_inquiries_traveler_count', `"traveler_count" > 0`)
export class TourInquiryEntity {
  @PrimaryColumn({ name: 'id', type: 'varchar', length: 26 })
  id: string = ulid();

  @Index('idx_tour_inquiries_tour_id')
  @Column({ name: 'tour_id', type: 'varchar', length: 26 })
  tourId: string;

  @ManyToOne(() => TourEntity, (tour) => tour.inquiries, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'tour_id',
    foreignKeyConstraintName: 'fk_tour_inquiries_tour_id',
  })
  tour: Relation<TourEntity>;

  @Index('idx_tour_inquiries_tour_departure_id')
  @Column({
    name: 'tour_departure_id',
    type: 'varchar',
    length: 26,
    nullable: true,
  })
  tourDepartureId: string | null;

  @ManyToOne(() => TourDepartureEntity, (departure) => departure.inquiries, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({
    name: 'tour_departure_id',
    foreignKeyConstraintName: 'fk_tour_inquiries_tour_departure_id',
  })
  departure: Relation<TourDepartureEntity> | null;

  @Index('idx_tour_inquiries_user_id')
  @Column({ name: 'user_id', type: 'varchar', length: 26, nullable: true })
  userId: string | null;

  @ManyToOne(() => UserEntity, (user) => user.inquiries, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({
    name: 'user_id',
    foreignKeyConstraintName: 'fk_tour_inquiries_user_id',
  })
  user: Relation<UserEntity> | null;

  @Column({ name: 'travel_date', type: 'date', nullable: true })
  travelDate: string | null;

  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @Column({ name: 'email', type: 'varchar', length: 254 })
  email: string;

  @Column({ name: 'phone', type: 'varchar', length: 16, nullable: true })
  phone: string | null;

  @Column({ name: 'traveler_count', type: 'integer' })
  travelerCount: number;

  @Column({ name: 'query', type: 'text', nullable: true })
  query: string | null;

  @Column({
    name: 'status',
    type: 'enum',
    enum: ETourInquiryStatus,
    default: ETourInquiryStatus.NEW,
  })
  status: ETourInquiryStatus;

  @Column({ name: 'status_notes', type: 'text', nullable: true })
  statusNotes: string | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
