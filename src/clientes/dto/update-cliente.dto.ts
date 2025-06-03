import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsEmail, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  @ApiProperty({ example: 'nombre', description: 'Nombre del cliente' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 1237472, description: 'CI del cliente' })
  @IsInt()
  ci: number;
}
