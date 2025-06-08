import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePagoDto {
  @ApiProperty({
    example: 'Efectivo',
    description: 'Metodo de pago que se usara',
  })
  @IsOptional()
  @IsString()
  metodoPago: string;
}
