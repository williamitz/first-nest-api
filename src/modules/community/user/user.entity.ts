import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  psw: string;

  // constructor(id: number, name: string, psw: string) {
  //   this.id = id;
  //   this.name = name;
  //   this.psw = psw;
  // }
}
