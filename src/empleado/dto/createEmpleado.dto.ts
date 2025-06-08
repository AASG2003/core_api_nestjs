import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsInt, IsDate, IsOptional } from 'class-validator';

export class CreateEmpleadoDto {
  @ApiProperty({
    example: 'Juana Maria Salazar',
    description: 'Nombre completo del empleado',
  })
  @IsString()
  @IsOptional()
  empNombreCompleto: string;

  @ApiProperty({
    example: 2838882,
    description: 'Ci del empleado',
  })
  @IsInt()
  @IsOptional()
  empCi: number;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'email valido del empleado',
  })
  @IsString()
  @IsOptional()
  empEmail: string;

  @ApiProperty({
    example: '2024-05-10',
    description: 'Fecha valida de fecha de nacimiento del empleado',
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  empFechaNacimiento: Date;

  @ApiProperty({
    example: 1,
    description: 'Genero del empleado: 1 -> Hombre, 0 -> Mujer',
  })
  @IsInt()
  @IsOptional()
  empGenero: number;
}
