import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lote } from '../../lotes/entities/Lote.entity';

@Entity('proveedor', { schema: 'mydb' })
export class Proveedor {
  @PrimaryGeneratedColumn()
  proveedorId: number;

  @Column('date', { name: 'NombreProveedor', nullable: true })
  nombreProveedor: string | null;

  @Column('date', { name: 'Email', nullable: true })
  email: string | null;

  @OneToMany(() => Lote, (lote) => lote.proveedorProveedor)
  lotes: Lote[];
}
