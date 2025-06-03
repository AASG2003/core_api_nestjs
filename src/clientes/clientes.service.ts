import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Clientes } from './entities/Clientes.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Clientes)
    private readonly clientesRepository: Repository<Clientes>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const existingEmail = await this.clientesRepository.findOne({
      where: { email: createClienteDto.email },
    });

    if (existingEmail) {
      throw new BadRequestException('Correo no existente');
    }

    const nuevocliente = this.clientesRepository.create(createClienteDto);
    return this.clientesRepository.save(nuevocliente);
  }

  async findAll(): Promise<Clientes[]> {
    return this.clientesRepository.find({ relations: ['pedidos'] });
  }

  async findOne(id: number): Promise<Clientes> {
    const cliente = await this.clientesRepository.findOne({
      where: { clienteId: id },
      relations: ['pedidos'],
    });
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }
    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = await this.findOne(id);
    if (!cliente) {
      throw new NotFoundException('Usuario no encontrado');
    }
    const updated = Object.assign(cliente, updateClienteDto);
    return this.clientesRepository.save(updated);
  }

  async remove(deleteCliente: number): Promise<{ message: string }> {
    console.log(deleteCliente);
    const cliente = await this.clientesRepository.findOne({
      where: {
        clienteId: deleteCliente,
      },
    });

    await this.clientesRepository.remove(cliente);

    return { message: 'Cliente eliminado correctamente' };
  }
}
