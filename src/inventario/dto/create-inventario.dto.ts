import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, Min } from 'class-validator';

export class CreateInventarioDto {
  @IsInt()
  inventarioId: number;

  @ApiProperty({
    example: 20,
    description: 'Numero de cantidad de stock',
  })
  @IsInt()
  @IsPositive()
  @Min(0)
  cantidadStock: number;

  @ApiProperty({
    example: 2,
    description: 'Id de numero de lote',
  })
  @IsInt()
  @IsPositive()
  loteLoteId: number;

  @ApiProperty({
    example: 2,
    description: 'Id de numero de producto',
  })
  @IsInt()
  @IsPositive()
  productosProductoId: number;
}
