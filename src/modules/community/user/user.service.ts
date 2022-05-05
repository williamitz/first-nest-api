import { Injectable, NotFoundException } from '@nestjs/common';
import { AddUserDto } from '../dto';

import { User } from './user.entity';
import { UpdateUserDto } from '../dto/updateuser.dto';

@Injectable()
export class UserService {
  private _users: User[] = [
    {
      id: 1,
      name: 'fulanito',
      psw: '123',
    },
  ];

  getUsers(): User[] {
    return this._users;
  }

  getUserById(id: number): User {
    return this._users.find((e) => e.id == id);
  }

  addUser({ name, psw }: AddUserDto) {
    this._users.push({
      id: Math.floor(Math.random() * 2000) + 1,
      name,
      psw,
    });
  }

  updateUser(id: number, { name, psw }: UpdateUserDto): User {
    const fuser = this._users.find((e) => e.id == id);
    if (!fuser) throw new NotFoundException('Resouce not found');
    fuser.name = name;
    fuser.psw = psw;
    return fuser;
  }

  deleteUser(id: number): User {
    const fuser = this._users.find((e) => e.id == id);
    if (!fuser) throw new NotFoundException('Resource not found');

    this._users = this._users.filter((e) => e.id != id);
    return fuser;
  }
}
