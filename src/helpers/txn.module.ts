import { Module } from '@nestjs/common';
import { TxnHelperService } from './txn.service.js';

@Module({
  imports: [],
  providers: [TxnHelperService],
  exports: [TxnHelperService],
})
export class TxnHelperModule {}
