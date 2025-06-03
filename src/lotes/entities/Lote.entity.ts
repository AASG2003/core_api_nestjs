import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Inventario } from '../../inventarios/entities/inventarios.entity';
import { Proveedor } from '../../proveedores/entities/proveedores.entity';

@Index('fk_Lote_Proveedor1_idx', ['proveedorProveedorId'], {})
@Entity('lote', { schema: 'mydb' })
export class Lote {
  @PrimaryGeneratedColumn()
  loteId: number;

  @Column('date', { name: 'FechaProduccion', nullable: true })
  fechaProduccion: string | null;

  @Column('date', { name: 'FechaVencimiento', nullable: true })
  fechaVencimiento: string | null;

  @Column('int', { name: 'CantidadProducida', nullable: true })
  cantidadProducida: number | null;

  @Column('int', { name: 'Proveedor_ProveedorID' })
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
