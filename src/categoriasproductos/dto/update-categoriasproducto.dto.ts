import { IsNumber, IsString, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriasproductoDto } from './create-categoriasproducto.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoriasproductoDto extends PartialType(
  CreateCategoriasproductoDto,
) {
  @ApiProperty({ example: 'Helados', description: 'Categorias de productos' })
  @IsString()
  @IsOptional()
  nombreCategoria: string;

  @ApiProperty({ example: 12423, description: 'Precio de de la categoria' })
  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @Type(() => Number)
  precioUnidad: number;

  @ApiProperty({ example: '2024-10-02', description: 'Fecha de lanzamiento' })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  fechaLanzamiento;
}
