import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Factura } from './Factura';
import { LineaPedido } from './LineaPedido';
import { Clientes } from './Clientes';

@Index('fk_Pedido_Clientes_idx', ['clientesClienteId'], {})
@Entity('pedido', { schema: 'mydb' })
export class Pedido {
  @Column('int', { primary: true, name: 'PedidoID' })
  pedidoId: number;

  @Column('date', { name: 'FechaPedido', nullable: true })
  fechaPedido: string | null;

  @Column('tinyint', { name: 'Estado', nullable: true })
  estado: number | null;

  @Column('int', { name: 'Clientes_ClienteID' })
  clientesClienteId: number;

  @OneToMany(() => Factura, (factura) => factura.pedidoPedido)
  facturas: Factura[];

  @OneToMany(() => LineaPedido, (lineaPedido) => lineaPedido.pedidoPedido)
  lineaPedidos: LineaPedido[];

  @ManyToOne(() => Clientes, (clientes) => clientes.pedidos, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([
    { name: 'Clientes_ClienteID', referencedColumnName: 'clienteId' },
  ])
  clientesCliente: Clientes;
}
