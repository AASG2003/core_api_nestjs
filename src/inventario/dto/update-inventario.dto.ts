import { CreateInventarioDto } from './create-inventario.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UpdateInventarioDto extends PartialType(CreateInventarioDto) {}
