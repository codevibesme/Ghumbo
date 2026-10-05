import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  type Relation,
  UpdateDateColumn,
} from 'typeorm';
import { CountryEntity } from './countries.entity.js';

@Entity('destinations')
export class DestinationEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ name: 'country_id', type: 'integer' })
  countryId: number;

  @ManyToOne(() => CountryEntity, (country) => country.destinations)
  @JoinColumn({
    name: 'country_id',
    foreignKeyConstraintName: 'fk_destinations_country',
  })
  country: Relation<CountryEntity>;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'overview', type: 'text' })
  overview: string;

  @Column({ name: 'latitude', type: 'double precision' })
  latitude: number;

  @Column({ name: 'longitude', type: 'double precision' })
  longitude: number;

  @Column({ name: 'image_url', type: 'varchar', length: 255 })
  imageUrl: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
