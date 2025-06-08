import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { Usuarios } from '../usuario/entities/usuario.entity';
import { Inventario } from '../inventario/entities/inventario.entity';
import { Factura } from '../factura/entities/factura.entity';
import { CategoriaProducto } from '../categoriaproducto/entities/categoriaproducto.entity';
import { LineaPedido } from '../linea_pedido/entities/linea_pago.entity';
import { Lote } from '../lote/entities/lote.entity';
import { Pago } from '../pago/entities/pago.entity';
import { Productos } from '../producto/entities/producto.entity';
import { Proveedor } from '../proveedor/entities/proveedor.entity';
import { Pedido } from '../pedido/entities/pedido.entity';
import { Empleado } from '../empleado/entities/empleado.entity';
import { Roles } from '../roles/entities/roles.entity';

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
          Usuarios,
          Inventario,
          Factura,
          CategoriaProducto,
          LineaPedido,
          Lote,
          Pago,
          Productos,
          Proveedor,
          Pedido,
          Empleado,
          Roles,
        ],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
