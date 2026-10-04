import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ETokenFor,
  TVerifiedTokenPayload,
  VerifiedToken̦PayloadSchema,
} from '../../types/jwt.type.js';

@Injectable()
export class JwtUtilityService {
  constructor(private readonly jwt: JwtService) {}

  async sign(payload: Record<string, unknown>, expiresIn: number = 3600) {
    await this.jwt.signAsync(payload, { expiresIn });
  }

  async verify<T extends TVerifiedTokenPayload>(
    token: string,
    tokenFor: ETokenFor,
  ): Promise<T> {
    token = token.replace('Bearer ', '');
    if (!token) throw new ForbiddenException('Token must be provided');

    const decoded = await this.jwt.verifyAsync<T>(token);
    const parsed = await VerifiedToken̦PayloadSchema.safeParseAsync(decoded);

    if (!parsed.success || parsed.data.type !== tokenFor) {
      throw new UnauthorizedException('Invalid token');
    }

    return parsed.data as T;
  }
}
