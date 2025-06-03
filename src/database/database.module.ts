import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { Clientes } from '../clientes/entities/Clientes.entity';
import { Inventario } from '../inventarios/entities/inventarios.entity';
import { Factura } from '../facturas/entities/Factura.entity';
import { CategoriaProducto } from '../categoriasproductos/entities/categoriasproducto.entity';
import { LineaPedido } from '../lineapedidos/entities/LineaPedido.entity';
import { Lote } from '../lotes/entities/Lote.entity';
import { Pago } from '../pagos/entities/Pago.entity';
import { Productos } from '../productos/entities/Productos.entity';
import { Proveedor } from '../proveedores/entities/proveedores.entity';
import { Pedido } from '../pedidos/entities/Pedido.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        entities: [
          Clientes,
          Inventario,
          Factura,
          CategoriaProducto,
          LineaPedido,
          Lote,
          Pago,
          Productos,
          Proveedor,
          Pedido,
        ],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
