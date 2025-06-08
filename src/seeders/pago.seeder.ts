import { DataSource } from 'typeorm';
import { Pago } from '../pago/entities/pago.entity';

export async function seedPago(dataSource: DataSource) {
  const pagoRepo = dataSource.getRepository(Pago);

  const pagos = [{ metodoPago: 'Efectivo' }, { metodoPago: 'QR' }];

  for (const pagoData of pagos) {
    const pago = pagoRepo.create(pagoData);
    await pagoRepo.save(pago);
  }

  console.log('✅ Seeding completo: pago');
}
