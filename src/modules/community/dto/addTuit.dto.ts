import { IsInt, IsObject, IsString, Length } from 'class-validator';
import { User } from '../models';

export class AddTuitDto {
  @IsObject({ message: 'El id del usuario debe ser un objeto válido' })
  readonly user: Partial<User>;

  @IsString({ message: 'El id del usuario debe ser un string válido' })
  @Length(3, 250)
  readonly message: string;
}
