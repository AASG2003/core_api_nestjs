import { DataSource } from 'typeorm';
import { Inventario } from '../inventario/entities/inventario.entity';
import { faker } from '@faker-js/faker';

export async function seedInventario(dataSource: DataSource) {
  const inventarioRepo = dataSource.getRepository(Inventario);

  // IDs asumidos ya existentes por los seeders de producto y lote
  const productoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const loteIds = [1, 2, 3, 4, 5];

  const registros: Inventario[] = [];

  for (let i = 0; i < 10; i++) {
    const inv = new Inventario();
    inv.cantidadStock = faker.number.int({ min: 10, max: 100 });
    inv.productosProductoId = productoIds[i]; // uno a uno para este ejemplo
    inv.loteLoteId = faker.helpers.arrayElement(loteIds);
    registros.push(inv);
  }

  await inventarioRepo.save(registros);
  console.log('✅ Seeding completo: inventario de productos');
}
