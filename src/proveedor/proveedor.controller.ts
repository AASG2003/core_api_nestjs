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
import { ProveedorService } from './proveedor.service';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

@ApiTags('Proveedores')
@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Post('create')
  create(@Body() dto: CreateProveedorDto) {
    return this.proveedorService.create(dto);
  }

  @Get('findAll')
  findAll() {
    return this.proveedorService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    return this.proveedorService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() dto: UpdateProveedorDto) {
    return this.proveedorService.update(+id, dto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.proveedorService.remove(+id);
  }
}
