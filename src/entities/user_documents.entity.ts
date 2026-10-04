import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { UserEntity } from './users.entity.js';
import { EUserDocument } from '../types/user_documents.type.js';

@Entity('user_documents')
export class UserDocumentEntity {
  @PrimaryColumn({ name: 'id', type: 'varchar', length: 26 })
  id: string = ulid();

  @Column({ name: 'user_id', type: 'varchar', length: 26 })
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.documents)
  @JoinColumn({
    name: 'user_id',
    foreignKeyConstraintName: 'fk_user_documents_user',
  })
  user: UserEntity;

  @Column({ name: 'type', type: 'enum', enum: EUserDocument })
  type: EUserDocument;

  @Column({ name: 'url', type: 'varchar', length: 254 })
  url: string;

  @Column({ name: 'document_number', type: 'varchar', length: 100 })
  documentNumber: string;

  @Column({ name: 'expiry_date', type: 'date', default: null })
  expiryDate: Date | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
