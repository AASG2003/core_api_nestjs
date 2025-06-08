import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateProveedorDto {
  @ApiProperty({
    example: 'Proveedor ABC',
    description: 'Nombre del proveedor',
  })
  @IsString()
  @IsOptional()
  nombreProveedor?: string;

  @ApiProperty({
    example: 'proveedor@correo.com',
    description: 'Correo electrónico del proveedor',
  })
  @IsEmail()
  @IsOptional()
  email?: string;
}
