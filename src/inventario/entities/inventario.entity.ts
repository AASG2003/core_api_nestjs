import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Lote } from '../../lote/entities/lote.entity';
import { Productos } from '../../producto/entities/producto.entity';

@Index('fk_Inventario_Lote1_idx', ['loteLoteId'], {})
@Index('fk_Inventario_Productos1_idx', ['productosProductoId'], {})
@Entity('inventario')
export class Inventario {
  @PrimaryGeneratedColumn({ name: 'InventarioID' })
  inventarioId: number;

  @Column('int', { name: 'Cantidad_stock', nullable: true })
  cantidadStock: number | null;

  @Column('int', { name: 'Lote_LoteID' })
  loteLoteId: number;

  @Column('int', { name: 'Productos_ProductoID' })
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
