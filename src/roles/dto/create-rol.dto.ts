import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRolDto {
  @ApiProperty({ example: 'Administrador', description: 'Nombre del rol' })
  @IsString()
  nombreRol: string;
}
