import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Productos } from '../../producto/entities/producto.entity';

@Index('fk_Linea_pedido_Pedido1_idx', ['pedidoPedidoId'], {})
@Index('fk_Linea_pedido_Productos1_idx', ['productosProductoId'], {})
@Entity('linea_pedido')
export class LineaPedido {
  @PrimaryGeneratedColumn({ name: 'LineaID' })
  lineaId: number;

  @Column('int', { name: 'Cantidad', nullable: true })
  cantidad: number | null;

  @Column('int', { name: 'Pedido_PedidoID' })
  pedidoPedidoId: number;

  @Column('int', { name: 'Productos_ProductoID' })
  productosProductoId: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.lineaPedidos, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Pedido_PedidoID', referencedColumnName: 'pedidoId' }])
  pedidoPedido: Pedido;

  @ManyToOne(() => Productos, (productos) => productos.lineaPedidos, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([
    { name: 'Productos_ProductoID', referencedColumnName: 'productoId' },
  ])
  productosProducto: Productos;
}
