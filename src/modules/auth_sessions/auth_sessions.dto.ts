import { OmitType, PickType } from '@nestjs/swagger';
import { AuthSessionEntity } from '../../entities/auth_sessions.entity.js';

export class AuthSessionDto extends AuthSessionEntity {}

export class CreateAuthSessionDto extends OmitType(AuthSessionDto, [
  'createdAt',
  'id',
  'user',
]) {}

export class UserSessionSignatureDto extends PickType(AuthSessionDto, [
  'deviceId',
  'ipAddress',
  'userAgent',
]) {}
