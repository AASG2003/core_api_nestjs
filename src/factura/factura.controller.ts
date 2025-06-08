import {
  Controller,
  Get,
  Patch,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { FacturaService } from './factura.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Controller('factura')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  @Post('create')
  create(@Body() createFactura: CreateFacturaDto) {
    return this.facturaService.create(createFactura);
  }

  @Get('findAll')
  findAlL() {
    return this.facturaService.findAll();
  }

  @Get('findOne/:id')
  findOne(id: number) {
    return this.facturaService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateFactura: UpdateFacturaDto) {
    return this.facturaService.update(+id, updateFactura);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.facturaService.remove(+id);
  }
}
