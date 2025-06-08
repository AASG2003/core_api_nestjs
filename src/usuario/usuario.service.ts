import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Usuarios } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuarioRepository: Repository<Usuarios>
  ) {}
  async create(createUsuario: CreateUsuarioDto) {
    const user = await this.usuarioRepository.findOne({
      where: {
        ci: createUsuario.ci,
      },
    });

    if (user) {
      throw new BadGatewayException('El usuario ya existe');
    }

    const nuevo_usuario = this.usuarioRepository.create(user);
    return this.usuarioRepository.save(nuevo_usuario);
  }

  async findAll(): Promise<Usuarios[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuarios> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        usuarioId: id,
      },
    });
    if (!usuario) {
      throw new NotFoundException('No se encontro el usuario');
    }
    return usuario;
  }
  async update(id: number, updateUsuario: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        usuarioId: id,
      },
    });
    if (!usuario) {
      throw new NotFoundException('No se encontro el usuario');
    }

    const updated_usuario = Object.assign(usuario, updateUsuario);

    return this.usuarioRepository.save(updated_usuario);
  }

  async remove(id: number) {
    const existe_usuario = await this.usuarioRepository.findOne({
      where: {
        usuarioId: id,
      },
    });

    if (!existe_usuario) {
      throw new NotFoundException('No se encontro el usuario');
    }

    return this.usuarioRepository.delete(existe_usuario);
  }
}
