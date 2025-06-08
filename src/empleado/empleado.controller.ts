import {
  Get,
  Post,
  Patch,
  Controller,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoDto } from './dto/createEmpleado.dto';
import { UpdateEmpleadoDto } from './dto/updateEmpleado.dto';

@ApiTags('Empleado')
@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Post('empleado/create')
  create(@Body() emp: CreateEmpleadoDto) {
    return this.empleadoService.create(emp);
  }

  @Get('empleado/listAll')
  findAll() {
    return this.empleadoService.findAll();
  }

  @Get('empleado/findOne/:id')
  findOne(@Param() ci: number) {
    return this.empleadoService.findOne(ci);
  }

  @Patch('empleado/update/:id')
  update(@Param('id') id: number, @Body() updateEmpleado: UpdateEmpleadoDto) {
    return this.empleadoService.update(+id, updateEmpleado);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.empleadoService.remove(+id);
  }
}
