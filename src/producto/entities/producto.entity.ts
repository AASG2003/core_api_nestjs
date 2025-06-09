import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Inventario } from '../../inventario/entities/inventario.entity';
import { LineaPedido } from '../../linea_pedido/entities/linea_pago.entity';
import { CategoriaProducto } from '../../categoriaproducto/entities/categoriaproducto.entity';

@Index(
  'fk_Productos_Categoria_Producto1_idx',
  ['categoriaProductoCategoriaId'],
  {}
)
@Entity('productos')
export class Productos {
  @PrimaryGeneratedColumn({ name: 'ProductoID' })
  productoId: number;

  @Column('varchar', { name: 'Nombre_producto', nullable: true, length: 50 })
  nombreProducto: string | null;

  @Column('decimal', {
    name: 'Precio_unidad_venta',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  precioUnidadVenta: string | null;

  @Column('date', { name: 'FechaLanzamiento', nullable: true })
  fechaLanzamiento: string | null;

  @Column('int', { name: 'Categoria_Producto_CategoriaID' })
  categoriaProductoCategoriaId: number;

  @Column('decimal', {
    name: 'Precio_unidad_costo',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  precioUnidadCosto: string | null;

  @OneToMany(() => Inventario, (inventario) => inventario.productosProducto)
  inventarios: Inventario[];

  @OneToMany(() => LineaPedido, (lineaPedido) => lineaPedido.productosProducto)
  lineaPedidos: LineaPedido[];

  @ManyToOne(
    () => CategoriaProducto,
    (categoriaProducto) => categoriaProducto.productos,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn({
    name: 'Categoria_Producto_CategoriaID',
    referencedColumnName: 'categoriaId',
  })
  categoriaProductoCategoria: CategoriaProducto;
}
