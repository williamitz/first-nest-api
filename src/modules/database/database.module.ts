import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.controller';

@Module({
  imports: [DatabaseProvider],
  exports: [DatabaseProvider],
})
export class DatabaseModule {}
