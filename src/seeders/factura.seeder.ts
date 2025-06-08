import { DataSource } from 'typeorm';
import { Factura } from '../factura/entities/factura.entity';
import { Pedido } from '../pedido/entities/pedido.entity';
import { Pago } from '../pago/entities/pago.entity';
import { faker } from '@faker-js/faker';

export async function seedFactura(dataSource: DataSource) {
  const facturaRepo = dataSource.getRepository(Factura);
  const pedidoRepo = dataSource.getRepository(Pedido);
  const pagoRepo = dataSource.getRepository(Pago);

  const pedidos = await pedidoRepo.find();
  const pagos = await pagoRepo.find();

  if (pedidos.length === 0 || pagos.length === 0) {
    console.warn(
      '⚠️ No hay pedidos o pagos suficientes para generar facturas.'
    );
    return;
  }

  const facturas: Factura[] = [];

  for (let i = 0; i < 100; i++) {
    const factura = new Factura();
    factura.fechaFactura = faker.date
      .recent({ days: 30 })
      .toISOString()
      .split('T')[0];
    factura.total = faker.commerce.price({ min: 10, max: 1000, dec: 0 }); // Precio sin decimales
    factura.pedidoPedidoId = faker.helpers.arrayElement(pedidos).pedidoId;
    factura.pagoPagoId = faker.helpers.arrayElement(pagos).pagoId;
    facturas.push(factura);
  }

  await facturaRepo.save(facturas);
  console.log('✅ Seeding completo: factura');
}
