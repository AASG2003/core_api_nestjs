import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@ApiTags('Pedidos')
@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post('create')
  create(@Body() dto: CreatePedidoDto) {
    return this.pedidoService.create(dto);
  }

  @Get('findAll')
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    return this.pedidoService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() dto: UpdatePedidoDto) {
    return this.pedidoService.update(+id, dto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.pedidoService.remove(+id);
  }
}
