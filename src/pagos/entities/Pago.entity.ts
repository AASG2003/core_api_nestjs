import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Factura } from '../../facturas/entities/Factura.entity';

@Entity('pago', { schema: 'mydb' })
export class Pago {
  @PrimaryGeneratedColumn()
  pagoId: number;

  @Column('int', { name: 'FechaPago', nullable: true })
  fechaPago: number | null;

  @Column('varchar', { name: 'MetodoPago', nullable: true, length: 45 })
  metodoPago: string | null;

  @OneToMany(() => Factura, (factura) => factura.pagoPago)
  facturas: Factura[];
}
