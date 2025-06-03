import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Factura } from '../../facturas/entities/Factura.entity';
import { LineaPedido } from '../../lineapedidos/entities/LineaPedido.entity';
import { Clientes } from '../../clientes/entities/Clientes.entity';

@Index('fk_Pedido_Clientes_idx', ['clientesClienteId'], {})
@Entity('pedido', { schema: 'mydb' })
export class Pedido {
  @PrimaryGeneratedColumn()
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
