import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CategoriaProductosService } from './categoriaproducto.service';
import { UpdateCategoriaProductosDto } from './dto/update-categoriaproducto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categoria Producto')
@Controller('categoriaproducto')
export class CategoriaProductoController {
  constructor(
    private readonly categoriaproductoService: CategoriaProductosService
  ) {}

  @Post('create')
  create(@Body() categoriaproducto) {
    return this.categoriaproductoService.create(categoriaproducto);
  }

  @Get('findOne/:nombre')
  findOne(@Param('nombre') nombre: string) {
    return this.categoriaproductoService.findOne(nombre);
  }

  @Get('findAll')
  findAll() {
    return this.categoriaproductoService.findAll();
  }

  @Patch('update/:id')
  update(
    @Param() id: number,
    @Body() updatecategoria: UpdateCategoriaProductosDto
  ) {
    return this.categoriaproductoService.update(+id, updatecategoria);
  }

  @Delete('delete/:id')
  delete(id: number) {
    return this.categoriaproductoService.remove(+id);
  }
}
