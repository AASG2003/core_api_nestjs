import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { LineaPedidoService } from './linea_pedido.service';
import { CreateLineaPedidoDto } from './dto/create-linea_pedido.dto';
import { UpdateLineaPedidoDto } from './dto/update-linea_pedido.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Linea Pedido')
@Controller('lineapedido')
export class LineaPedidoController {
  constructor(private readonly lineapedidoService: LineaPedidoService) {}

  @Get('findAll')
  findAll() {
    return this.lineapedidoService.findAll();
  }

  @Post('create')
  create(@Body() createlinea: CreateLineaPedidoDto) {
    return this.lineapedidoService.create(createlinea);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updatelinea: UpdateLineaPedidoDto) {
    return this.lineapedidoService.update(+id, updatelinea);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.lineapedidoService.remove(+id);
  }
}
