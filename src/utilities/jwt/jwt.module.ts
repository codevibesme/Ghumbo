import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { JwtUtilityService } from './jwt.service.js';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SIGNING_SECRET,
    }),
  ],
  providers: [JwtUtilityService],
  exports: [JwtUtilityService],
})
export class JwtUtilityModule {}
