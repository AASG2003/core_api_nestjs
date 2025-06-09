import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Productos } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Producto')
@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post('create')
  create(@Body() producto: CreateProductoDto) {
    return this.productoService.create(producto);
  }

  @Get('findAll')
  findAll() {
    return this.productoService.findAll();
  }

  @Get('findOne/:nombre')
  findOne(@Param('nombre') nombre: string) {
    return this.productoService.findOne(nombre);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateProductos: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductos);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.productoService.remove(+id);
  }
}
