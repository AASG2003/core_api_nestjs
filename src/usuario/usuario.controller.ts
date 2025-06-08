import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@ApiTags('Usuarios')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('create')
  create(@Body() createUser: CreateUsuarioDto) {
    return this.usuarioService.create(createUser);
  }

  @Get('findAll')
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param() id: number) {
    return this.usuarioService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param() id: number, @Body() updateUsuario: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuario);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: number) {
    return this.usuarioService.remove(+id);
  }
}
