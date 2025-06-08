import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lote } from '../../lote/entities/lote.entity';

@Entity('proveedor')
export class Proveedor {
  @PrimaryGeneratedColumn({ name: 'ProveedorID' })
  proveedorId: number;

  @Column('varchar', { name: 'NombreProveedor', nullable: true, length: 45 })
  nombreProveedor: string | null;

  @Column('varchar', { name: 'Email', nullable: true, length: 45 })
  email: string | null;

  @OneToMany(() => Lote, (lote) => lote.proveedorProveedor)
  lotes: Lote[];
}
