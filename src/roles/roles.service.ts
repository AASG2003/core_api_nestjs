import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Roles } from './entities/roles.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>
  ) {}

  async create(createrol: CreateRolDto) {
    const rol = await this.rolesRepository.findOne({
      where: {
        nombreRol: createrol.nombreRol,
      },
    });
    if (rol) {
      throw new BadGatewayException('Nombre de rol ya existente');
    }

    const nuevo_rol = this.rolesRepository.create(createrol);
    return this.rolesRepository.save(nuevo_rol);
  }

  async findAll(): Promise<Roles[]> {
    return await this.rolesRepository.find();
  }

  async findOne(nombre_rol: string): Promise<Roles> {
    const buscar_rol = await this.rolesRepository.findOne({
      where: {
        nombreRol: nombre_rol,
      },
    });
    if (!buscar_rol) {
      throw new NotFoundException('Rol no encontrado');
    }

    return buscar_rol;
  }

  async update(id: number, updateRol: UpdateRolDto): Promise<UpdateRolDto> {
    const existe_rol = this.rolesRepository.findOne({
      where: {
        rolId: id,
      },
    });
    if (!existe_rol) {
      throw new NotFoundException('No se encontro el usuario');
    }

    const updated_rol = Object.assign(existe_rol, updateRol);
    return this.rolesRepository.save(updated_rol);
  }

  async remove(id: number): Promise<{ message: string }> {
    const existe_rol = await this.rolesRepository.findOne({
      where: {
        rolId: id,
      },
    });

    if (!existe_rol) {
      throw new NotFoundException('No se encontro el rol');
    }
    this.rolesRepository.delete(existe_rol);
    return { message: 'Rol eliminado' };
  }
}
