import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthSessionRepository } from './auth_sessions.repository.js';
import { AuthSessionDto, CreateAuthSessionDto } from './auth_sessions.dto.js';
import { EntityManager } from 'typeorm';

@Injectable()
export class AuthSessionService {
  constructor(private readonly repo: AuthSessionRepository) {}

  async create(
    data: CreateAuthSessionDto,
    txn: EntityManager | null,
  ): Promise<AuthSessionDto> {
    return await this.repo.create(data, txn);
  }

  async hasActiveSessions(userId: string): Promise<boolean> {
    return await this.repo.hasActiveSessions(userId);
  }

  async findById(id: string): Promise<AuthSessionDto | null> {
    return await this.repo.findById(id);
  }

  async findByIdOrThrow(id: string): Promise<AuthSessionDto> {
    const data = await this.findById(id);
    if (!data) {
      throw new NotFoundException('Auth Session not found');
    }

    return data;
  }

  async findByRefreshTokenHash(
    refreshTokenHash: string,
  ): Promise<AuthSessionDto | null> {
    return await this.repo.findByRefreshTokenHash(refreshTokenHash);
  }

  async findByRefreshTokenHashOrThrow(
    refreshTokenHash: string,
  ): Promise<AuthSessionDto> {
    const data = await this.findByRefreshTokenHash(refreshTokenHash);
    if (!data) throw new NotFoundException('Auth session not found');

    return data;
  }

  async rotateRefreshToken(
    id: string,
    oldHash: string,
    newHash: string,
  ): Promise<AuthSessionDto> {
    const result = await this.repo.rotateRefreshToken(id, oldHash, newHash);
    if (!result) {
      throw new UnauthorizedException(
        'Refresh token is invalid or already used',
      );
    }

    return await this.findByIdOrThrow(id);
  }

  async revokeSession(id: string): Promise<void> {
    const result = await this.repo.revokeSession(id);
    if (!result) {
      throw new ConflictException('Session is already logged out.');
    }

    return;
  }
}
