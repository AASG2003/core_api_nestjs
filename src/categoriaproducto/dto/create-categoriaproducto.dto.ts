import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsDate,
  IsString,
  Min,
  IsPositive,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaProductoDto {
  @ApiProperty({
    example: 'Helados',
    description: 'Nombre de la categoria',
  })
  @IsString()
  @IsNotEmpty()
  nombreCategoria: string;

  @ApiProperty({
    example: '12.50',
    description: 'Precio unidad de la categoria',
  })
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @IsPositive()
  precioUnidad: string;

  @ApiProperty({
    example: '2025-03-21',
    description: 'Fecha de lanzamiento de la categoria',
  })
  @IsDate()
  @Type(() => Date)
  fechaLanzamiento: string;
}
