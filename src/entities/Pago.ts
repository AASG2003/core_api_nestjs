import { Column, Entity, OneToMany } from 'typeorm';
import { Factura } from './Factura';

@Entity('pago', { schema: 'mydb' })
export class Pago {
  @Column('int', { primary: true, name: 'PagoID' })
  pagoId: number;

  @Column('int', { name: 'FechaPago', nullable: true })
  fechaPago: number | null;

  @Column('varchar', { name: 'MetodoPago', nullable: true, length: 45 })
  metodoPago: string | null;

  @OneToMany(() => Factura, (factura) => factura.pagoPago)
  facturas: Factura[];
}
