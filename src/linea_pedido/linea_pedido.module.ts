import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineaPedido } from './entities/linea_pago.entity';
import { LineaPedidoService } from './linea_pedido.service';
import { LineaPedidoController } from './linea_pedido.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LineaPedido])],
  providers: [LineaPedidoService],
  controllers: [LineaPedidoController],
})
export class LineaPedidoModule {}
