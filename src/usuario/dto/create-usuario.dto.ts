import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsEmail,
  IsDate,
  IsInt,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({ example: '1283222', description: 'Numero de ci' })
  @IsInt()
  @Type(() => Number)
  ci: number;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'Email del usuario',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '2025-10-02',
    description: 'Fecha de nacimiento',
  })
  @IsDate()
  @Type(() => Date)
  fechaNacimiento: Date;

  @ApiProperty({
    example: 1,
    description: 'Genero de la persona: 1->Hombre, 0 -> Mujer',
  })
  @IsInt()
  genero: number;

  @ApiProperty({
    example: 2,
    description: 'Id del rol que va tener el usuario',
  })
  @IsInt()
  rolesRolId: number;
}
