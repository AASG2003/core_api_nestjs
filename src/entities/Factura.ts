import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Pago } from './Pago';
import { Pedido } from './Pedido';

@Index('fk_Factura_Pago1_idx', ['pagoPagoId'], {})
@Index('fk_Factura_Pedido1_idx', ['pedidoPedidoId'], {})
@Entity('factura', { schema: 'mydb' })
export class Factura {
  @Column('int', { primary: true, name: 'FacturaID' })
  facturaId: number;

  @Column('date', { name: 'FechaFactura', nullable: true })
  fechaFactura: string | null;

  @Column('decimal', { name: 'Total', nullable: true, precision: 10, scale: 0 })
  total: string | null;

  @Column('int', { primary: true, name: 'Pago_PagoID' })
  pagoPagoId: number;

  @Column('int', { primary: true, name: 'Pedido_PedidoID' })
  pedidoPedidoId: number;

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
