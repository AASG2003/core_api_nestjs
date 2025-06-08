import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pago } from '../../pago/entities/pago.entity';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Index('fk_Factura_Pago1_idx', ['pagoPagoId'], {})
@Index('fk_Factura_Pedido1_idx', ['pedidoPedidoId'], {})
@Entity('factura')
export class Factura {
  @PrimaryGeneratedColumn({ name: 'FacturaID' })
  facturaId: number;

  @Column('date', { name: 'FechaFactura', nullable: true })
  fechaFactura: string | null;

  @Column('decimal', { name: 'Total', nullable: true, precision: 10, scale: 0 })
  total: string | null;

  @Column('int', { name: 'Pedido_PedidoID' })
  pedidoPedidoId: number;

  @Column('int', { name: 'Pago_PagoID' })
  pagoPagoId: number;

  @ManyToOne(() => Pago, (pago) => pago.facturas, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Pago_PagoID', referencedColumnName: 'pagoId' }])
  pagoPago: Pago;

  @ManyToOne(() => Pedido, (pedido) => pedido.facturas, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Pedido_PedidoID', referencedColumnName: 'pedidoId' }])
  pedidoPedido: Pedido;
}
