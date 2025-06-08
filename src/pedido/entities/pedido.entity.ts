import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Factura } from '../../factura/entities/factura.entity';
import { LineaPedido } from '../../linea_pedido/entities/linea_pago.entity';
import { Usuarios } from '../../usuario/entities/usuario.entity';
import { Empleado } from '../../empleado/entities/empleado.entity';

@Index('fk_Pedido_Clientes_idx', ['clientesClienteId'], {})
@Index('fk_Pedido_Empleado1_idx', ['empleadoEmpleadoId'], {})
@Entity('pedido')
export class Pedido {
  @PrimaryGeneratedColumn({ name: 'PedidoID' })
  pedidoId: number;

  @Column('date', { name: 'FechaPedido', nullable: true })
  fechaPedido: string | null;

  @Column('tinyint', { name: 'Estado', nullable: true })
  estado: number | null;

  @Column('int', { name: 'Clientes_ClienteID' })
  clientesClienteId: number;

  @Column('int', { name: 'Empleado_EmpleadoID' })
  empleadoEmpleadoId: number;

  @OneToMany(() => Factura, (factura) => factura.pedidoPedido)
  facturas: Factura[];

  @OneToMany(() => LineaPedido, (lineaPedido) => lineaPedido.pedidoPedido)
  lineaPedidos: LineaPedido[];

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.pedidos, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([
    { name: 'Clientes_ClienteID', referencedColumnName: 'usuarioId' },
  ])
  clientesCliente: Usuarios;

  @ManyToOne(() => Empleado, (empleado) => empleado.pedidos, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([
    { name: 'Empleado_EmpleadoID', referencedColumnName: 'empleadoId' },
  ])
  empleadoEmpleado: Empleado;
}
