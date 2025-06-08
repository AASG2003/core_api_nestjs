import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaProductoDto } from './create-categoriaproducto.dto';

export class UpdateCategoriaProductosDto extends PartialType(
  CreateCategoriaProductoDto
) {}
