import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { tymeormOptions } from './environments/environment';

import { CommunityModule } from './modules/community/community.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    DatabaseModule,
    // TypeOrmModule.forRoot(tymeormOptions),
    CommunityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static serverPort: number;

  constructor(private readonly _config: ConfigService) {
    AppModule.serverPort = Number(this._config.get('PORT'));
  }
}
