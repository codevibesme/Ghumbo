import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ulid } from 'ulid';
import { EUserRole } from '../types/users.type.js';
import { UserDocumentEntity } from './user_documents.entity.js';
import { UserSessionEntity } from './user_sessions.entity.js';

@Entity('users')
export class UserEntity {
  @PrimaryColumn({ name: 'id', type: 'varchar', length: 26 })
  id: string = ulid();

  @Column({ name: 'first_name', type: 'varchar', length: 50 })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 50 })
  lastName: string;

  @Column({ name: 'email', type: 'varchar', length: 254 })
  email: string;

  @Column({ name: 'phone', type: 'varchar', length: 15, nullable: true })
  phone: string | null;

  @Column({
    name: 'role',
    type: 'enum',
    enum: EUserRole,
    default: EUserRole.CUSTOMER,
  })
  role: EUserRole;

  @Column({
    name: 'password_hash',
    type: 'varchar',
    length: 60,
    nullable: true,
  })
  passwordHash: string | null;

  @Column({ name: 'is_verified', type: 'boolean', default: false })
  isVerified: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @OneToMany(() => UserDocumentEntity, (documents) => documents.user, {
    onDelete: 'CASCADE',
  })
  documents: UserDocumentEntity[];

  @OneToMany(() => UserSessionEntity, (sessions) => sessions.user, {
    onDelete: 'CASCADE',
  })
  sessions: UserSessionEntity[];
}
