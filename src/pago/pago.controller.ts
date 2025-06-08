import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PagoService } from './pago.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pago')
@Controller('pago')
export class PagoController {
  constructor(private readonly pagoService: PagoService) {}

  @Post('create')
  create(@Body() pago: CreatePagoDto) {
    return this.pagoService.create(pago);
  }

  @Get('findAll')
  findAll() {
    return this.pagoService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    return this.pagoService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updatePago: UpdatePagoDto) {
    return this.update(+id, updatePago);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.pagoService.remove(+id);
  }
}
