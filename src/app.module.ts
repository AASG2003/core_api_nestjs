import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ClientesModule } from './clientes/clientes.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { LineapedidoModule } from './lineapedidos/lineapedido.module';
import { ProductosModule } from './productos/productos.module';
import { FacturasModule } from './facturas/facturas.module';
import { PagosModule } from './pagos/pagos.module';
import { LotesModule } from './lotes/lotes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { CategoriasproductosModule } from './categoriasproductos/categoriasproductos.module';
import databaseConfig from './database/database.config';
import config from './config/config.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env'],
      isGlobal: true,
      load: [databaseConfig, config],
    }),
    DatabaseModule,
    ClientesModule,
    PedidosModule,
    LineapedidoModule,
    ProductosModule,
    FacturasModule,
    PagosModule,
    LotesModule,
    ProveedoresModule,
    InventariosModule,
    CategoriasproductosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
