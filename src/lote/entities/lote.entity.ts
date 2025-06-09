import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Inventario } from '../../inventario/entities/inventario.entity';
import { Proveedor } from '../../proveedor/entities/proveedor.entity';

@Index('fk_Lote_Proveedor1_idx', ['proveedorProveedorId'], {})
@Entity('lote')
export class Lote {
  @PrimaryGeneratedColumn({ name: 'LoteID' })
  loteId: number;

  @Column('date', { name: 'FechaProduccion', nullable: true })
  fechaProduccion: string | null;

  @Column('date', { name: 'FechaVencimiento', nullable: true })
  fechaVencimiento: string | null;

  @Column('int', { name: 'CantidadProducida', nullable: true })
  cantidadProducida: number | null;

  @Column('int', { name: 'Defectos', nullable: true })
  defectos: number | null;

  @Column('decimal', {
    name: 'costo_produccion',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  costoProduccion: string | null;

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
