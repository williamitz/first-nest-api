import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddTuitDto, UpdateTuitDto } from '../dto';
import { Tuit, User } from '../models';

@Injectable()
export class TuitService {
  constructor(
    @InjectRepository(Tuit) private readonly _tuitorm: Repository<Tuit>,
    @InjectRepository(User) private readonly _userorm: Repository<User>,
  ) {}

  async getTuits(): Promise<Tuit[]> {
    return await this._tuitorm.find({
      relations: ['user'],
    });
  }

  async getTuitsByUser(id: number): Promise<Tuit[]> {
    return await this._tuitorm.find({
      where: { user: id },
      relations: ['user'],
    });
  }

  async addTuit({ user, message }: AddTuitDto): Promise<Tuit> {
    // const userRef = await this._userorm.findOne(user);
    // if (!userRef) throw new NotFoundException('Usuario no encontrado');

    const tuit = this._tuitorm.create({ user, message });

    return await this._tuitorm.save(tuit);
  }

  async updateTuit({ message }: UpdateTuitDto, id: number): Promise<Tuit> {
    const tuit = await this._tuitorm.preload({
      id,
      message,
    });
    if (!tuit) throw new NotFoundException('Usuario no encontrado');

    return tuit;
  }

  async deleteTuit(id: number): Promise<Tuit> {
    const tuit = await this._tuitorm.findOne(id);
    if (!tuit) throw new NotFoundException('Usuario no encontrado');

    return await this._tuitorm.remove(tuit);
  }
}
