import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Inventario } from '../../inventarios/entities/inventarios.entity';
import { LineaPedido } from '../../lineapedidos/entities/LineaPedido.entity';
import { CategoriaProducto } from '../../categoriasproductos/entities/categoriasproducto.entity';

@Index(
  'fk_Productos_Categoria_Producto1_idx',
  ['categoriaProductoCategoriaId'],
  {},
)
@Entity('productos', { schema: 'mydb' })
export class Productos {
  @PrimaryGeneratedColumn()
  productoId: number;

  @Column('int', { name: 'Nombre_producto', nullable: true })
  nombreProducto: number | null;

  @Column('decimal', {
    name: 'Precio_unidad',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  precioUnidad: string | null;

  @Column('date', { name: 'FechaLanzamiento', nullable: true })
  fechaLanzamiento: string | null;

  @Column('int', { name: 'Categoria_Producto_CategoriaID' })
  categoriaProductoCategoriaId: number;

  @Column('varchar', {
    name: 'Costos_ingredientes',
    nullable: true,
    length: 45,
  })
  costosIngredientes: string | null;

  @OneToMany(() => Inventario, (inventario) => inventario.productosProducto)
  inventarios: Inventario[];

  @OneToMany(() => LineaPedido, (lineaPedido) => lineaPedido.productosProducto)
  lineaPedidos: LineaPedido[];

  @ManyToOne(
    () => CategoriaProducto,
    (categoriaProducto) => categoriaProducto.productos,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([
    {
      name: 'Categoria_Producto_CategoriaID',
      referencedColumnName: 'categoriaId',
    },
  ])
  categoriaProductoCategoria: CategoriaProducto;
}
