import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Factura } from '../../factura/entities/factura.entity';

@Entity('pago')
export class Pago {
  @PrimaryGeneratedColumn({ name: 'PagoID' })
  pagoId: number;

  @Column('varchar', { name: 'MetodoPago', nullable: true, length: 45 })
  metodoPago: string | null;

  @OneToMany(() => Factura, (factura) => factura.pagoPago)
  facturas: Factura[];
}
