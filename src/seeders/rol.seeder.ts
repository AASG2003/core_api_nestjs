import { DataSource } from 'typeorm';
import { Roles } from '../roles/entities/roles.entity';

export const seedRoles = async (dataSource: DataSource) => {
  const roleRepo = dataSource.getRepository(Roles);

  const roles = ['Administrador', 'Cliente'];

  for (const nombreRol of roles) {
    const exists = await roleRepo.findOne({ where: { nombreRol } });
    if (!exists) {
      const role = roleRepo.create({ nombreRol });
      await roleRepo.save(role);
    }
  }

  console.log('Roles insertados.');
};
