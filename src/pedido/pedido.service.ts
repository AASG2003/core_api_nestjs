import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>
  ) {}

  async create(createPedido: CreatePedidoDto): Promise<Pedido> {
    const pedido = this.pedidoRepository.create(createPedido);
    return this.pedidoRepository.save(pedido);
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find({
      relations: ['clientesCliente', 'empleadoEmpleado'],
    });
  }

  async findOne(id: number): Promise<Pedido> {
    const existe_pedido = await this.pedidoRepository.findOne({
      where: { pedidoId: id },
      relations: ['clientesCliente', 'empleadoEmpleado'],
    });

    if (!existe_pedido) {
      throw new NotFoundException('No existe este pedido');
    }
    return existe_pedido;
  }

  async update(id: number, updatePedido: UpdatePedidoDto): Promise<Pedido> {
    const existe_pedido = await this.pedidoRepository.findOne({
      where: {
        pedidoId: id,
      },
    });

    if (!existe_pedido) {
      throw new NotFoundException('No se encontro el pedido');
    }
    const update_pedido = Object.assign(existe_pedido, updatePedido);
    return this.pedidoRepository.save(update_pedido);
  }

  async remove(id: number): Promise<{ message: string }> {
    const existe_pedido = await this.pedidoRepository.findOne({
      where: {
        pedidoId: id,
      },
    });

    if (!existe_pedido) {
      throw new NotFoundException('No se encontro el pedido');
    }

    return { message: 'Pedido eliminado correctamente' };
  }
}
