import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tuit, User } from './models';
import { TuitController } from './tuit/tuit.controller';
import { TuitService } from './tuit/tuit.service';

import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Tuit])],
  controllers: [UserController, TuitController],
  providers: [UserService, TuitService],
})
export class CommunityModule {}
