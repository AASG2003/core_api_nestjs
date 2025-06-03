import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Clientes } from './entities/Clientes.entity';

@ApiTags('Clientes') // Agrupa las rutas bajo "Clientes"
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo cliente' })
  @ApiResponse({
    status: 201,
    description: 'Cliente creado exitosamente.',
    type: Clientes,
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos o correo ya registrado.',
  })
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los clientes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de clientes.',
    type: [Clientes],
  })
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cliente por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Cliente encontrado.',
    type: Clientes,
  })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clientesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un cliente' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateClienteDto })
  @ApiResponse({
    status: 200,
    description: 'Cliente actualizado.',
    type: Clientes,
  })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClienteDto: UpdateClienteDto,
  ) {
    return this.clientesService.update(id, updateClienteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un cliente por su ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Cliente eliminado correctamente.' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientesService.remove(id);
  }
}
