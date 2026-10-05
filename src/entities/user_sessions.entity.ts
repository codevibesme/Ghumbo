import { ulid } from 'ulid';
import {
  Column,
  Entity,
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

  @Column({ name: 'user_id', type: 'varchar', length: 26 })
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.sessions)
  @JoinColumn({
    name: 'user_id',
    foreignKeyConstraintName: 'fk_user_sessions_user',
  })
  user: Relation<UserEntity>;

  @Column({ name: 'refresh_token_hash', type: 'varchar', length: 64 })
  refreshTokenHash: string;

  @Column({ name: 'user_agent', type: 'varchar', length: 512 })
  userAgent: string;

  @Column({ name: 'ip_address', type: 'varchar', length: 45 })
  ipAddress: string;

  @Column({ name: 'deviceId', type: 'varchar', length: 255 })
  deviceId: string;

  @Column({ name: 'expires_at', type: 'timestamptz' })
  expiresAt: Date;

  @Column({ name: 'revoked_at', type: 'timestamptz', nullable: true })
  revokedAt: Date | null;

  @Column({ name: 'last_used_at', type: 'timestamptz' })
  lastUsedAt: Date;

  @Column({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}
