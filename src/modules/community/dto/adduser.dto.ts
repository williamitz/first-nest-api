import { IsString, Length } from 'class-validator';
export class AddUserDto {
  @IsString({ message: 'El nombre de usuario debe ser un string' })
  @Length(3, 20)
  readonly name: string;

  @IsString({ message: 'La constraseña debe ser un string' })
  @Length(3, 20)
  readonly psw: string;
}
