import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { Usuarios } from '../../usuario/entities/usuario.entity';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn({ name: 'RolID' })
  rolId: number;

  @Column('varchar', { name: 'Nombre_rol', nullable: true, length: 45 })
  nombreRol: string | null;

  @OneToMany(() => Usuarios, (usuarios) => usuarios.rolesRol)
  usuarios: Usuarios[];
}
