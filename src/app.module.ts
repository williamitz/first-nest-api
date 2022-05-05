import { Module } from '@nestjs/common';

import { CommunityModule } from './modules/community/community.module';

@Module({
  imports: [CommunityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
