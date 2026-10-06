import { ulid } from 'ulid';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  type Relation,
} from 'typeorm';
import { UserEntity } from './users.entity.js';

@Entity('user_sessions')
export class UserSessionEntity {
  @PrimaryColumn({ name: 'id', type: 'varchar', length: 26 })
  id: string = ulid();

  @Index('idx_user_sessions_user_id')
  @Column({ name: 'user_id', type: 'varchar', length: 26 })
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.sessions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user_id',
    foreignKeyConstraintName: 'fk_user_sessions_user_id',
  })
  user: Relation<UserEntity>;

  @Column({
    name: 'refresh_token_hash',
    type: 'char',
    length: 64,
    unique: true,
  })
  refreshTokenHash: string;

  @Column({ name: 'user_agent', type: 'text' })
  userAgent: string;

  @Column({ name: 'ip_address', type: 'inet' })
  ipAddress: string;

  @Column({ name: 'device_id', type: 'varchar', length: 255 })
  deviceId: string;

  @Column({ name: 'expires_at', type: 'timestamptz' })
  expiresAt: Date;

  @Column({ name: 'revoked_at', type: 'timestamptz', nullable: true })
  revokedAt: Date | null;

  @Column({ name: 'last_used_at', type: 'timestamptz', default: () => 'now()' })
  lastUsedAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}
