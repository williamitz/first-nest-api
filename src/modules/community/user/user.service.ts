import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { AddUserDto } from '../dto';

import { User } from './user.entity';
import { UpdateUserDto } from '../dto/updateuser.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  private _users: User[] = [
    {
      id: 1,
      name: 'fulanito',
      psw: '123',
    },
  ];

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  getUserById(id: number): User {
    return this._users.find((e) => e.id == id);
  }

  async addUser({ name, psw }: AddUserDto): Promise<User> {
    const id = Math.floor(Math.random() * 2000) + 1;
    const user = this.userRepository.create({ id, name, psw });

    return await this.userRepository.save(user);
  }

  async updateUser(id: number, { name, psw }: UpdateUserDto): Promise<User> {
    const user: User = await this.userRepository.preload({
      id,
      name,
      psw,
    });

    if (!user) throw new NotFoundException();

    return user;
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userRepository.findOne(id);

    if (!user) throw new NotFoundException();

    this.userRepository.remove(user);
  }
}
