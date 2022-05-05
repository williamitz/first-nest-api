import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddUserDto, UpdateUserDto } from '../dto';

import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersvc: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.usersvc.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: number): User {
    return this.usersvc.getUserById(id);
  }

  @Post()
  addUser(@Body() body: AddUserDto) {
    this.usersvc.addUser(body);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() body: UpdateUserDto): User {
    return this.usersvc.updateUser(id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): User {
    return this.usersvc.deleteUser(id);
  }
}
