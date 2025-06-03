import { Column, Entity, OneToMany } from 'typeorm';
import { Pedido } from './Pedido';

@Entity('clientes', { schema: 'mydb' })
export class Clientes {
  @Column('int', { primary: true, name: 'ClienteID' })
  clienteId: number;

  @Column('varchar', { name: 'NombreCompleto', nullable: true, length: 45 })
  nombreCompleto: string | null;

  @Column('int', { name: 'CI', nullable: true })
  ci: number | null;

  @Column('varchar', { name: 'email', nullable: true, length: 45 })
  email: string | null;

  @OneToMany(() => Pedido, (pedido) => pedido.clientesCliente)
  pedidos: Pedido[];
}
