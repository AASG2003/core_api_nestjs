import { DataSource } from 'typeorm';
import { AppDataSource } from '../database/databaseSource';

import { seedRoles } from './rol.seeder';
import { seedUsuarios } from './usuario.seeder';
import { seedEmpleados } from './empleado.seeder';
import { seedCategoriaProducto } from './categoriaproducto.seeder';
import { seedProductos } from './producto.seeder';
import { seedProveedor } from './proveedor.seeder';
import { seedLote } from './lote.seeder';
import { seedInventario } from './inventario.seeder';
import { seedPago } from './pago.seeder';
import { seedPedido } from './pedido.seeder';
import { seedLineaPedido } from './lineapedido.seeder';
import { seedFactura } from './factura.seeder';

const runSeeders = async () => {
  await AppDataSource.initialize();

  // Primero roles y usuarios
  await seedRoles(AppDataSource);
  await seedUsuarios(AppDataSource);

  // Empleados (depende de nada o usuarios)
  await seedEmpleados(AppDataSource);

  // Categoría de productos
  await seedCategoriaProducto(AppDataSource);

  // Proveedores
  await seedProveedor(AppDataSource);

  // Productos (depende de categoría producto)
  await seedProductos(AppDataSource);

  // Lotes (depende de proveedores)
  await seedLote(AppDataSource);

  // Inventarios (depende de productos y lotes)
  await seedInventario(AppDataSource);

  // Métodos de pago
  await seedPago(AppDataSource);

  // Pedidos (depende de usuarios y empleados)
  await seedPedido(AppDataSource);

  // Líneas de pedido (depende de pedidos y productos)
  await seedLineaPedido(AppDataSource);

  // Facturas (depende de pedidos y pagos)
  await seedFactura(AppDataSource);

  await AppDataSource.destroy();
};

runSeeders().catch((err) => {
  console.error('Error en seeders:', err);
});
