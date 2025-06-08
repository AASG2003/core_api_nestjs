import { DataSource } from 'typeorm';
import { Proveedor } from '../proveedor/entities/proveedor.entity';
import { faker } from '@faker-js/faker';

export async function seedProveedor(dataSource: DataSource) {
  const proveedorRepo = dataSource.getRepository(Proveedor);

  const proveedores: Proveedor[] = [];

  for (let i = 0; i < 5; i++) {
    const proveedor = new Proveedor();
    proveedor.nombreProveedor = faker.company.name();
    proveedor.email = faker.internet.email();
    proveedores.push(proveedor);
  }

  await proveedorRepo.save(proveedores);
  console.log('✅ Seeding completo: proveedores');
}
