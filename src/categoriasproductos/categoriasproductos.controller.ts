import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriasproductosService } from './categoriasproductos.service';
import { CreateCategoriasproductoDto } from './dto/create-categoriasproducto.dto';
import { UpdateCategoriasproductoDto } from './dto/update-categoriasproducto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categorias productos')
@Controller('categoriasproductos')
export class CategoriasproductosController {
  constructor(
    private readonly categoriasproductosService: CategoriasproductosService,
  ) {}

  @Post()
  create(@Body() createCategoriasproductoDto: CreateCategoriasproductoDto) {
    return this.categoriasproductosService.create(createCategoriasproductoDto);
  }

  @Get()
  findAll() {
    return this.categoriasproductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasproductosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriasproductoDto: UpdateCategoriasproductoDto,
  ) {
    return this.categoriasproductosService.update(
      +id,
      updateCategoriasproductoDto,
    );
  }

  @Delete()
  remove(@Param('id') id: number) {
    return this.categoriasproductosService.remove(id);
  }
}
