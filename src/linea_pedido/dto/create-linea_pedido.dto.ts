import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, Min } from 'class-validator';

export class CreateLineaPedidoDto {
  @IsOptional()
  @IsInt()
  lineaId: number;

  @ApiProperty({
    example: 1000,
    description: 'Cantidad de los productos que se pueden tener',
  })
  @IsInt()
  @IsOptional()
  @Min(0)
  @IsPositive()
  cantidad: number;

  @ApiProperty({
    example: 2,
    description: 'Id del pedido existente',
  })
  @IsInt()
  pedidoPedidoId: number;

  @ApiProperty({
    example: 3,
    description: 'Id del productos a elegir',
  })
  @IsInt()
  productosProductoId: number;
}
