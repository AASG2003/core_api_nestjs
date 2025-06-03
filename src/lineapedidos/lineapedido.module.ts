import { Module } from '@nestjs/common';
import { LineapedidoService } from './lineapedido.service';
import { LineapedidoController } from './lineapedido.controller';

@Module({
  controllers: [LineapedidoController],
  providers: [LineapedidoService],
})
export class LineapedidoModule {}
