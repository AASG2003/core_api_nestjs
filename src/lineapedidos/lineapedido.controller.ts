import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LineapedidoService } from './lineapedido.service';
import { CreateLineapedidoDto } from './dto/create-lineapedido.dto';
import { UpdateLineapedidoDto } from './dto/update-lineapedido.dto';

@Controller('lineapedido')
export class LineapedidoController {
  constructor(private readonly lineapedidoService: LineapedidoService) {}

  @Post()
  create(@Body() createLineapedidoDto: CreateLineapedidoDto) {
    return this.lineapedidoService.create(createLineapedidoDto);
  }

  @Get()
  findAll() {
    return this.lineapedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lineapedidoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLineapedidoDto: UpdateLineapedidoDto,
  ) {
    return this.lineapedidoService.update(+id, updateLineapedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lineapedidoService.remove(+id);
  }
}
