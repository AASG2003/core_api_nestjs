import { DataSource } from 'typeorm';
import { Lote } from '../lote/entities/lote.entity';
import { faker } from '@faker-js/faker';

export async function seedLote(dataSource: DataSource) {
  const loteRepo = dataSource.getRepository(Lote);

  // Asumiendo que ya existen proveedores con IDs del 1 al 5
  const proveedorIds = [1, 2, 3, 4, 5];
  const registros: Lote[] = [];

  for (let i = 0; i < 10; i++) {
    const lote = new Lote();
    lote.fechaProduccion = faker.date.past().toISOString().split('T')[0];
    lote.fechaVencimiento = faker.date.future().toISOString().split('T')[0];
    lote.cantidadProducida = faker.number.int({ min: 50, max: 500 });
    lote.costoProduccion = faker.number.int({ min: 100, max: 1000 }).toString();
    lote.proveedorProveedorId = faker.helpers.arrayElement(proveedorIds);
    registros.push(lote);
  }

  await loteRepo.save(registros);
  console.log('✅ Seeding completo: lotes de producción');
}
