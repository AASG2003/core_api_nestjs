import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateProductoDto {
  @ApiProperty({
    example: 'Pato',
    description: 'Nombre del producto',
  })
  @IsString()
  @IsNotEmpty()
  nombreProducto: string;

  @ApiProperty({
    example: '12.20',
    description: 'Precio unidad que tendra le producto',
  })
  @IsNumber()
  @Type(() => Number)
  precioUnidad: string;

  @ApiProperty({
    example: Date.now(),
    description: 'Fecha de lanzamiento',
  })
  @IsDate()
  @Type(() => Date)
  fechaLanzamiento: string;

  @ApiProperty({
    example: 1,
    description: 'Id de la categoria',
  })
  @IsInt()
  categoriaProductoCategoriaId: number;
}
