import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Inventario')
@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @Post('create')
  create(@Body() createInventario: CreateInventarioDto) {
    return this.inventarioService.create(createInventario);
  }

  @Get('findAll')
  findAll() {
    return this.inventarioService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    return this.inventarioService.findOne(+id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: number,
    @Body() updateInventario: UpdateInventarioDto
  ) {
    return this.inventarioService.update(+id, updateInventario);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.inventarioService.remove(+id);
  }
}
