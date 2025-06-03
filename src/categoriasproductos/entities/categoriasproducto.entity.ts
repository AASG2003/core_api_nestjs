import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Productos } from '../../productos/entities/Productos.entity';

@Entity('categoria_producto', { schema: 'mydb' })
export class CategoriaProducto {
  @PrimaryGeneratedColumn()
  categoriaId: number;

  @Column('varchar', { name: 'Nombre_Categoria', nullable: true, length: 45 })
  nombreCategoria: string | null;

  @Column('decimal', {
    name: 'Precio_unidad',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  precioUnidad: number | null;

  @Column('date', { name: 'FechaLanzamiento', nullable: true })
  fechaLanzamiento: string | null;

  @OneToMany(
    () => Productos,
    (productos) => productos.categoriaProductoCategoria,
  )
  productos: Productos[];
}
