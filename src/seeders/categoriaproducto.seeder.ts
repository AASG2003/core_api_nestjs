import { DataSource } from 'typeorm';
import { CategoriaProducto } from '../categoriaproducto/entities/categoriaproducto.entity';
import { faker } from '@faker-js/faker';

export async function seedCategoriaProducto(dataSource: DataSource) {
  const categoriaRepo = dataSource.getRepository(CategoriaProducto);

  const categorias = [
    'Helado Clásico',
    'Helado Gourmet',
    'Bebida Helada',
    'Paleta Artesanal',
    'Postre Congelado',
  ];

  const categoriaEntities: CategoriaProducto[] = [];

  for (let i = 0; i < categorias.length; i++) {
    const cat = new CategoriaProducto();
    cat.nombreCategoria = categorias[i];
    cat.precioUnidad = faker.number
      .float({ min: 5, max: 25, fractionDigits: 2 })
      .toFixed(2);
    cat.fechaLanzamiento = faker.date
      .past({ years: 3 })
      .toISOString()
      .split('T')[0];
    categoriaEntities.push(cat);
  }

  await categoriaRepo.save(categoriaEntities);
  console.log('✅ Seeding completo: categorias de producto');
}
