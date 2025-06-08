import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LineaPedido } from './entities/linea_pago.entity';
import { Repository } from 'typeorm';
import { CreateLineaPedidoDto } from './dto/create-linea_pedido.dto';
import { UpdateLineaPedidoDto } from './dto/update-linea_pedido.dto';

@Injectable()
export class LineaPedidoService {
  constructor(
    @InjectRepository(LineaPedido)
    private readonly lineapedidoRepository: Repository<LineaPedido>
  ) {}

  async create(createLineaPedido: CreateLineaPedidoDto) {
    const createlineapedido = await this.lineapedidoRepository.findOne({
      where: {
        lineaId: createLineaPedido.lineaId,
      },
    });

    if (createlineapedido) {
      throw new BadGatewayException('Pedido ya existente');
    }

    this.lineapedidoRepository.create(createLineaPedido);
    return this.lineapedidoRepository.save(createlineapedido);
  }

  async findAll(): Promise<LineaPedido[]> {
    return await this.lineapedidoRepository.find();
  }

  async findOne(id: number): Promise<LineaPedido> {
    const linea_pedido = await this.lineapedidoRepository.findOne({
      where: {
        lineaId: id,
      },
    });

    if (!linea_pedido) {
      throw new NotFoundException('No se encontro la linea');
    }

    return linea_pedido;
  }

  async update(id: number, updateLineaPedido: UpdateLineaPedidoDto) {
    const linea = await this.lineapedidoRepository.findOne({
      where: {
        lineaId: id,
      },
    });

    if (!linea) {
      throw new NotFoundException('No se encontro la linea de pedido');
    }

    const update_linea = Object.assign(linea, updateLineaPedido);

    return this.lineapedidoRepository.save(update_linea);
  }

  async remove(id: number): Promise<{ message: string }> {
    const linea = this.lineapedidoRepository.findOne({
      where: {
        lineaId: id,
      },
    });

    if (!linea) {
      throw new NotFoundException('No se encontro la linea de pedido');
    }

    return { message: 'Linea de pedido eliminado correctamente' };
  }
}
