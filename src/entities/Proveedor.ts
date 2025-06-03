import { Column, Entity, OneToMany } from 'typeorm';
import { Lote } from './Lote';

@Entity('proveedor', { schema: 'mydb' })
export class Proveedor {
  @Column('int', { primary: true, name: 'ProveedorID' })
  proveedorId: number;

  @Column('date', { name: 'NombreProveedor', nullable: true })
  nombreProveedor: string | null;

  @Column('date', { name: 'Email', nullable: true })
  email: string | null;

  @OneToMany(() => Lote, (lote) => lote.proveedorProveedor)
  lotes: Lote[];
}
