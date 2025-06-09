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
    'Sundae Clásico',
    'Banana Split',
    'Helado de Pistacho',
    'Helado de Dulce de Leche',
    'Helado de Frambuesa',
    'Helado de Cookies & Cream',
    'Helado de Café',
    'Torta Helada de Maracuyá',
    'Smoothie Tropical',
    'Smoothie de Arándano',
    'Helado Vegano de Coco',
    'Helado Sin Azúcar de Vainilla',
    'Yogurt con Granola y Miel',
    'Malteada de Oreo',
    'Malteada de Chocolate Blanco',
    'Helado Artesanal de Queso',
    'Helado de Limón y Albahaca',
    'Paleta de Kiwi',
    'Paleta de Fresa con Leche',
    'Helado de Té Verde (Matcha)',
  ];

  const productos: Productos[] = [];

  for (let i = 0; i < nombres.length; i++) {
    const prod = new Productos();
    prod.nombreProducto = nombres[i];
    prod.precioUnidadVenta = faker.number
      .float({ min: 8, max: 12, fractionDigits: 2 })
      .toFixed(2);
    prod.fechaLanzamiento = faker.date
      .past({ years: 2 })
      .toISOString()
      .split('T')[0];
    prod.precioUnidadCosto = faker.number
      .float({ min: 13, max: 20, fractionDigits: 2 })
      .toFixed(2);
    prod.categoriaProductoCategoriaId =
      faker.helpers.arrayElement(categoriasIds);
    productos.push(prod);
  }

  await productoRepo.save(productos);
  console.log('✅ Seeding completo: productos de heladería');
}
