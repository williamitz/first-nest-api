import { User } from './user.model';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsObject } from 'class-validator';
@Entity()
export class Tuit {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne((type) => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: 'tuit_user' })
  @IsObject()
  user: User;

  @Column({ nullable: false })
  message: string;

  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
}
