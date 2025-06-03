import { Injectable } from '@nestjs/common';
import { CreateLineapedidoDto } from './dto/create-lineapedido.dto';
import { UpdateLineapedidoDto } from './dto/update-lineapedido.dto';

@Injectable()
export class LineapedidoService {
  create(createLineapedidoDto: CreateLineapedidoDto) {
    return 'This action adds a new lineapedido';
  }

  findAll() {
    return `This action returns all lineapedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lineapedido`;
  }

  update(id: number, updateLineapedidoDto: UpdateLineapedidoDto) {
    return `This action updates a #${id} lineapedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} lineapedido`;
  }
}
