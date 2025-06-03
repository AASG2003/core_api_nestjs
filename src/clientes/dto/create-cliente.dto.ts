import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({
    example: 'Juan Pérez',
    description: 'Nombre completo del cliente',
  })
  @IsNotEmpty()
  @IsString()
  nombreCompleto: string;

  @ApiProperty({
    example: 12345678,
    description: 'Número de cédula de identidad del cliente',
  })
  @IsNotEmpty()
  @IsNumber()
  ci: number;

  @ApiProperty({
    example: 'juan@example.com',
    description: 'Correo electrónico del cliente',
  })
  @IsEmail()
  email: string;
}
