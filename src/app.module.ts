import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsuarioModule } from './usuario/usuario.module';
import { LoteModule } from './lote/lote.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import databaseConfig from './database/database.config';
import config from './config/config.provider';
import { RolesModule } from './roles/roles.module';
import { ProductoModule } from './producto/producto.module';
import { PedidoModule } from './pedido/pedido.module';
import { PagoModule } from './pago/pago.module';
import { LineaPedidoModule } from './linea_pedido/linea_pedido.module';
import { InventarioModule } from './inventario/inventario.module';
import { FacturaModule } from './factura/factura.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { CategoriaProductoModule } from './categoriaproducto/categoritaproducto.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env'],
      isGlobal: true,
      load: [databaseConfig, config],
    }),
    DatabaseModule,
    UsuarioModule,
    LoteModule,
    ProveedorModule,
    RolesModule,
    ProductoModule,
    PedidoModule,
    PagoModule,
    LineaPedidoModule,
    InventarioModule,
    FacturaModule,
    EmpleadoModule,
    CategoriaProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('The module has been initialized');
  }
}
