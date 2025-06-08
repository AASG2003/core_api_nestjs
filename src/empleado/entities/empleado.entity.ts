import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Entity('empleado')
export class Empleado {
  @PrimaryGeneratedColumn({ name: 'EmpleadoID' })
  empleadoId: number;

  @Column('varchar', { name: 'Emp_NombreCompleto', nullable: true, length: 45 })
  empNombreCompleto: string | null;

  @Column('int', { name: 'Emp_CI', nullable: true })
  empCi: number | null;

  @Column('varchar', { name: 'Emp_email', nullable: true, length: 45 })
  empEmail: string | null;

  @Column('date', { name: 'Emp_Fecha_nacimiento', nullable: true })
  empFechaNacimiento: string | null;

  @Column('tinyint', { name: 'Emp_Genero', nullable: true })
  empGenero: number | null;

  @OneToMany(() => Pedido, (pedido) => pedido.empleadoEmpleado)
  pedidos: Pedido[];
}
