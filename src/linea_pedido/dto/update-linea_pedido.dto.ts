import { PartialType } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, Min } from 'class-validator';
import { CreateLineaPedidoDto } from './create-linea_pedido.dto';

export class UpdateLineaPedidoDto extends PartialType(CreateLineaPedidoDto) {}
