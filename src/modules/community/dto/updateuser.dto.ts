import { IsString, Length } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  @Length(3, 30)
  readonly name: string;

  @IsString({ message: 'La constraseña debe ser un string' })
  @Length(0, 20)
  readonly psw: string;
}
