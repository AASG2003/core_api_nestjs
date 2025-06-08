import { DataSource } from 'typeorm';
import { LineaPedido } from '../linea_pedido/entities/linea_pago.entity';
import { Pedido } from '../pedido/entities/pedido.entity';
import { Productos } from '../producto/entities/producto.entity';
import { faker } from '@faker-js/faker';

export async function seedLineaPedido(dataSource: DataSource) {
  const lineaPedidoRepo = dataSource.getRepository(LineaPedido);
  const pedidoRepo = dataSource.getRepository(Pedido);
  const productoRepo = dataSource.getRepository(Productos);

  const pedidos = await pedidoRepo.find();
  const productos = await productoRepo.find();

  if (pedidos.length === 0 || productos.length === 0) {
    console.warn(
      '⚠️ No hay pedidos o productos suficientes para generar líneas de pedido.'
    );
    return;
  }

  const lineas: LineaPedido[] = [];

  for (let i = 0; i < 10; i++) {
    const linea = new LineaPedido();
    linea.cantidad = faker.number.int({ min: 1, max: 5 });
    const pedido = faker.helpers.arrayElement(pedidos);
    const producto = faker.helpers.arrayElement(productos);

    linea.pedidoPedidoId = pedido.pedidoId;
    linea.productosProductoId = producto.productoId;

    lineas.push(linea);
  }

  await lineaPedidoRepo.save(lineas);
  console.log('✅ Seeding completo: línea_pedido');
}
