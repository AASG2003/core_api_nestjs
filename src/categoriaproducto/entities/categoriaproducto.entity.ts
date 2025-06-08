import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Productos } from '../../producto/entities/producto.entity';

@Entity('categoria_producto')
export class CategoriaProducto {
  @PrimaryGeneratedColumn({ name: 'CategoriaID' })
  categoriaId: number;

  @Column('varchar', { name: 'Nombre_Categoria', nullable: true, length: 45 })
  nombreCategoria: string | null;

  @Column('decimal', {
    name: 'Precio_unidad',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  precioUnidad: string | null;

  @Column('date', { name: 'FechaLanzamiento', nullable: true })
  fechaLanzamiento: string | null;

  @OneToMany(
    () => Productos,
    (productos) => productos.categoriaProductoCategoria
  )
  productos: Productos[];
}
