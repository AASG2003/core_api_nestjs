import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsDateString, IsNotEmpty } from 'class-validator';

export class CreatePedidoDto {
  @ApiProperty({ example: '2025-06-07', description: 'Fecha del pedido' })
  @IsOptional()
  @IsDateString()
  fechaPedido?: string;

  @ApiProperty({
    example: 1,
    description: 'Estado del pedido (0: pendiente, 1: entregado)',
  })
  @IsOptional()
  @IsInt()
  estado?: number;

  @ApiProperty({ example: 101, description: 'ID del cliente (usuario)' })
  @IsNotEmpty()
  @IsInt()
  clientesClienteId: number;

  @ApiProperty({
    example: 5,
    description: 'ID del empleado que toma el pedido',
  })
  @IsNotEmpty()
  @IsInt()
  empleadoEmpleadoId: number;
}
