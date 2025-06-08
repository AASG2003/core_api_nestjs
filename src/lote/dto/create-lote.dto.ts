import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateLoteDto {
  @ApiProperty({
    example: '2025-03-20',
    description: 'Fecha de produccion del lote',
  })
  @IsDate()
  @Type(() => Date)
  fechaProduccion: string;

  @ApiProperty({
    example: '2025-10-03',
    description: 'Fecha de vencimiento',
  })
  @IsDate()
  @Type(() => Date)
  fechaVencimiento: string;

  @ApiProperty({
    example: 1,
    description: 'Cantidad de produccion',
  })
  @IsInt()
  cantidadProducida: number;

  @ApiProperty({
    example: '12.5',
    description: 'Costo de produccion',
  })
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  @IsPositive()
  costoProduccion: string;
}
