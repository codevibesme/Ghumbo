import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthSessionEntity } from '../../entities/auth_sessions.entity.js';
import { AuthSessionService } from './auth_sessions.service.js';
import { AuthSessionRepository } from './auth_sessions.repository.js';

@Module({
  imports: [TypeOrmModule.forFeature([AuthSessionEntity])],
  providers: [AuthSessionService, AuthSessionRepository],
  exports: [AuthSessionService],
})
export class AuthSessionModule {}
