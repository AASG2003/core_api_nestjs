import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { Repository } from 'typeorm';
import { Inventario } from './entities/inventario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario)
    private readonly inventarioRepository: Repository<Inventario>
  ) {}

  async create(createInventario: CreateInventarioDto) {
    const nuevo_inventario =
      await this.inventarioRepository.create(createInventario);
    return this.inventarioRepository.save(nuevo_inventario);
  }

  async findAll(): Promise<Inventario[]> {
    return await this.inventarioRepository.find();
  }

  async findOne(id: number): Promise<Inventario> {
    const existe_inventario = await this.inventarioRepository.findOne({
      where: {
        loteLoteId: id,
      },
    });
    if (!existe_inventario) {
      throw new NotFoundException('No se encontro un inventario');
    }
    return existe_inventario;
  }
  async update(id: number, updateInventario) {
    const existe_inventario = await this.inventarioRepository.findOne({
      where: {
        inventarioId: id,
      },
    });

    if (!existe_inventario) {
      throw new NotFoundException('No existe este inventario ');
    }

    const update_inventario = Object.assign(
      existe_inventario,
      updateInventario
    );
    return this.inventarioRepository.save(update_inventario);
  }

  async remove(id: number): Promise<{ message: string }> {
    const existe_inventario = await this.inventarioRepository.findOne({
      where: {
        inventarioId: id,
      },
    });

    if (!existe_inventario) {
      throw new NotFoundException('No se encontro el inventario');
    }

    this.inventarioRepository.delete(existe_inventario);
    return { message: 'Se elimino el inventario correctamente' };
  }
}
