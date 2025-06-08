// src/seeders/empleado.seeder.ts

import { DataSource } from 'typeorm';
import { Empleado } from '../empleado/entities/empleado.entity';
import { faker } from '@faker-js/faker';

export async function seedEmpleados(dataSource: DataSource) {
  const empleadoRepo = dataSource.getRepository(Empleado);
  const empleados: Empleado[] = [];

  for (let i = 0; i < 20; i++) {
    const empleado = new Empleado();
    empleado.empNombreCompleto = faker.person.fullName();
    empleado.empCi = faker.number.int({ min: 1000000, max: 99999999 });
    empleado.empEmail = faker.internet.email();
    empleado.empFechaNacimiento = faker.date
      .birthdate({ mode: 'age', min: 18, max: 45 })
      .toISOString()
      .split('T')[0];
    empleado.empGenero = faker.helpers.arrayElement([0, 1]); // 0: Femenino, 1: Masculino

    empleados.push(empleado);
  }

  await empleadoRepo.save(empleados);
  console.log('✅ Seeding completo: 20 empleados insertados');
}
