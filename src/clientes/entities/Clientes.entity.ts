import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from '../../pedidos/entities/Pedido.entity';

@Entity('clientes', { schema: 'mydb' })
export class Clientes {
  @PrimaryGeneratedColumn()
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
