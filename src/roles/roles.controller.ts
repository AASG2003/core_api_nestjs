import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@ApiTags('Rol')
@Controller('rol')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post('create')
  create(@Body() createRol: CreateRolDto) {
    return this.rolesService.create(createRol);
  }

  @Get('findAll')
  findAll() {
    return this.rolesService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param() nombre: string) {
    return this.rolesService.findOne(nombre);
  }

  @Patch('update/:id')
  update(@Param() id: number, @Body() updateRol: UpdateRolDto) {
    return this.rolesService.update(+id, updateRol);
  }

  @Delete('delete/:id')
  delete(@Param() id: number) {
    return this.rolesService.remove(+id);
  }
}
