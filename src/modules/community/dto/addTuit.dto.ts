import { IsInt, IsString, Length } from 'class-validator';

export class AddTuitDto {
  @IsInt({ message: 'El id del usuario debe ser un entero válido' })
  readonly user: number;

  @IsString({ message: 'El id del usuario debe ser un string válido' })
  @Length(3, 250)
  readonly message: string;
}
