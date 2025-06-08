import { DataSource } from 'typeorm';
import { Usuarios } from '../usuario/entities/usuario.entity';
import { Roles } from '../roles/entities/roles.entity';
import { faker } from '@faker-js/faker';

export async function seedUsuarios(dataSource: DataSource) {
  const userRepo = dataSource.getRepository(Usuarios);

  const usuarios: Usuarios[] = [];
  for (let i = 1; i <= 1000; i++) {
    const usuario = new Usuarios();
    usuario.usuarioId = i;
    usuario.nombreCompleto = faker.person.fullName();
    usuario.ci = faker.number.int({ min: 1000000, max: 9999999 });
    usuario.email = faker.internet.email();
    usuario.fechaNacimiento = faker.date
      .birthdate()
      .toISOString()
      .split('T')[0];
    usuario.genero = faker.helpers.arrayElement([0, 1]);

    // ✅ Asignar una instancia de Roles
    const rol = new Roles();
    rol.rolId = faker.helpers.arrayElement([1, 2]);
    usuario.rolesRol = rol;

    usuarios.push(usuario);
  }

  await userRepo.save(usuarios);
  console.log('✅ Seeding completo: roles + 1000 usuarios');
}
