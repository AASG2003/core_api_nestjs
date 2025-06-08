import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LoteService } from './lote.service';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Lote')
@Controller('lote')
export class LoteController {
  constructor(private readonly loteService: LoteService) {}

  @Post('create')
  create(@Body() createLote: CreateLoteDto) {
    return this.loteService.create(createLote);
  }

  @Get('findAll')
  findALl() {
    return this.loteService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    return this.loteService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateLote: UpdateLoteDto) {
    return this.loteService.update(+id, updateLote);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.loteService.remove(+id);
  }
}
