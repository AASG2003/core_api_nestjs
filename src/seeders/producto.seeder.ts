import { DataSource } from 'typeorm';
import { Productos } from '../producto/entities/producto.entity';
import { faker } from '@faker-js/faker';

export async function seedProductos(dataSource: DataSource) {
  const productoRepo = dataSource.getRepository(Productos);

  // IDs de categorías asumidas ya insertadas por seedCategoriaProducto()
  const categoriasIds = [1, 2, 3, 4, 5];

  const nombres = [
    'Helado de Vainilla',
    'Helado de Chocolate',
    'Smoothie de Fresa',
    'Paleta de Mango',
    'Tarta Helada',
    'Helado de Menta',
    'Copa de Frutas',
    'Yogurt Congelado',
    'Paleta de Coco',
    'Brownie Helado',
  ];

  const productos: Productos[] = [];

  for (let i = 0; i < nombres.length; i++) {
    const prod = new Productos();
    prod.nombreProducto = nombres[i];
    prod.precioUnidad = faker.number
      .float({ min: 3, max: 15, fractionDigits: 2 })
      .toFixed(2);
    prod.fechaLanzamiento = faker.date
      .past({ years: 2 })
      .toISOString()
      .split('T')[0];
    prod.categoriaProductoCategoriaId =
      faker.helpers.arrayElement(categoriasIds);
    productos.push(prod);
  }

  await productoRepo.save(productos);
  console.log('✅ Seeding completo: productos de heladería');
}
