import { IsString, Length } from 'class-validator';

export class UpdateTuitDto {
  @IsString({ message: 'El id del usuario debe ser un string válido' })
  @Length(3, 250)
  readonly message: string;
}
