import {
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
import { UserEntity } from './users.entity.js';
import { EUserDocument } from '../types/user_documents.type.js';

@Entity('user_documents')
export class UserDocumentEntity {
  @PrimaryColumn({ name: 'id', type: 'varchar', length: 26 })
  id: string = ulid();

  @Index('idx_user_documents_user_id')
  @Column({ name: 'user_id', type: 'varchar', length: 26 })
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.documents, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user_id',
    foreignKeyConstraintName: 'fk_user_documents_user_id',
  })
  user: Relation<UserEntity>;

  @Column({ name: 'type', type: 'enum', enum: EUserDocument })
  type: EUserDocument;

  @Column({ name: 'url', type: 'text' })
  url: string;

  @Column({ name: 'document_number', type: 'varchar', length: 100 })
  documentNumber: string;

  @Column({ name: 'expiry_date', type: 'date', nullable: true })
  expiryDate: string | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
