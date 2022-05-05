import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommunityModule } from './modules/community/community.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_curse_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CommunityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
