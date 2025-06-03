import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Inventario } from './Inventario';
import { Proveedor } from './Proveedor';

@Index('fk_Lote_Proveedor1_idx', ['proveedorProveedorId'], {})
@Entity('lote', { schema: 'mydb' })
export class Lote {
  @Column('int', { primary: true, name: 'LoteID' })
  loteId: number;

  @Column('date', { name: 'FechaProduccion', nullable: true })
  fechaProduccion: string | null;

  @Column('date', { name: 'FechaVencimiento', nullable: true })
  fechaVencimiento: string | null;

  @Column('int', { name: 'CantidadProducida', nullable: true })
  cantidadProducida: number | null;

  @Column('int', { primary: true, name: 'Proveedor_ProveedorID' })
  proveedorProveedorId: number;

  @OneToMany(() => Inventario, (inventario) => inventario.loteLote)
  inventarios: Inventario[];

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.lotes, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([
    { name: 'Proveedor_ProveedorID', referencedColumnName: 'proveedorId' },
  ])
  proveedorProveedor: Proveedor;
}
