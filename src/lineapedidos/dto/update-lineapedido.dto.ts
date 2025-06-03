import { PartialType } from '@nestjs/mapped-types';
import { CreateLineapedidoDto } from './create-lineapedido.dto';

export class UpdateLineapedidoDto extends PartialType(CreateLineapedidoDto) {}
