import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';

import dbConfig from './configs/db.config.js';

import { AppService } from './app.service.js';
import { MODULES } from './modules/index.js';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => dbConfig,
    }),
    ...MODULES,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
