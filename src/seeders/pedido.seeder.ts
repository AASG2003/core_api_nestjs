import { DataSource } from 'typeorm';
import { Pedido } from '../pedido/entities/pedido.entity';
import { Usuarios } from '../usuario/entities/usuario.entity';
import { Empleado } from '../empleado/entities/empleado.entity';
import { faker } from '@faker-js/faker';

export async function seedPedido(dataSource: DataSource) {
  const pedidoRepo = dataSource.getRepository(Pedido);
  const usuarioRepo = dataSource.getRepository(Usuarios);
  const empleadoRepo = dataSource.getRepository(Empleado);

  const clientes = await usuarioRepo.find();
  const empleados = await empleadoRepo.find();

  if (clientes.length === 0 || empleados.length === 0) {
    console.warn(
      '⚠️ No hay clientes o empleados suficientes para generar pedidos.'
    );
    return;
  }

  const pedidos: Pedido[] = [];

  for (let i = 0; i < 100; i++) {
    const pedido = new Pedido();
    pedido.fechaPedido = faker.date
      .recent({ days: 30 })
      .toISOString()
      .split('T')[0];
    pedido.estado = faker.number.int({ min: 0, max: 1 }); // 0 = pendiente, 1 = entregado
    pedido.clientesClienteId = faker.helpers.arrayElement(clientes).usuarioId;
    pedido.empleadoEmpleadoId =
      faker.helpers.arrayElement(empleados).empleadoId;
    pedidos.push(pedido);
  }

  await pedidoRepo.save(pedidos);
  console.log('✅ Seeding completo: pedido');
}
