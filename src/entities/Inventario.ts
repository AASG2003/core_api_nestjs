import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Lote } from './Lote';
import { Productos } from './Productos';

@Index('fk_Inventario_Lote1_idx', ['loteLoteId'], {})
@Index('fk_Inventario_Productos1_idx', ['productosProductoId'], {})
@Entity('inventario', { schema: 'mydb' })
export class Inventario {
  @Column('int', { primary: true, name: 'InventarioID' })
  inventarioId: number;

  @Column('varchar', { name: 'Cantidad_stock', nullable: true, length: 45 })
  cantidadStock: string | null;

  @Column('int', { primary: true, name: 'Lote_LoteID' })
  loteLoteId: number;

  @Column('int', { primary: true, name: 'Productos_ProductoID' })
  productosProductoId: number;

  @ManyToOne(() => Lote, (lote) => lote.inventarios, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Lote_LoteID', referencedColumnName: 'loteId' }])
  loteLote: Lote;

  @ManyToOne(() => Productos, (productos) => productos.inventarios, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([
    { name: 'Productos_ProductoID', referencedColumnName: 'productoId' },
  ])
  productosProducto: Productos;
}
