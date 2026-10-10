import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthIdentityEntity } from '../../entities/auth_identities.entity.js';
import { AuthIdentityService } from './auth_identities.service.js';
import { AuthIdentityRepository } from './auth_identities.repository.js';

@Module({
  imports: [TypeOrmModule.forFeature([AuthIdentityEntity])],
  providers: [AuthIdentityService, AuthIdentityRepository],
  exports: [AuthIdentityService],
})
export class AuthIdentityModule {}
