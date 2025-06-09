import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Roles } from '../../roles/entities/roles.entity';

@Index('fk_Usuarios_Roles1_idx', ['rolesRolId'], {})
@Entity('usuarios')
export class Usuarios {
  @PrimaryGeneratedColumn({ name: 'usuarioID' })
  usuarioId: number;

  @Column('varchar', { name: 'NombreCompleto', nullable: true, length: 45 })
  nombreCompleto: string | null;

  @Column('int', { name: 'CI', nullable: true })
  ci: number | null;

  @Column('varchar', { name: 'email', nullable: true, length: 45 })
  email: string | null;

  @Column('date', { name: 'Fecha_nacimiento', nullable: true })
  fechaNacimiento: string | null;

  @Column('tinyint', { name: 'Genero', nullable: true })
  genero: number | null;

  @Column('tinyint', { name: 'Porcentaje_Satisfaccion', nullable: true })
  porcentajeSatisfaccion: number | null;

  @Column('int', { name: 'Roles_RolID' })
  rolesRolId: number;

  @OneToMany(() => Pedido, (pedido) => pedido.clientesCliente)
  pedidos: Pedido[];

  @ManyToOne(() => Roles, (roles) => roles.usuarios, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Roles_RolID', referencedColumnName: 'rolId' }])
  rolesRol: Roles;
}
