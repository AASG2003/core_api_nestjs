import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './entities/proveedor.entity';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepository: Repository<Proveedor>
  ) {}

  async create(createProveedor: CreateProveedorDto): Promise<Proveedor> {
    const proveedor = await this.proveedorRepository.findOne({
      where: {
        nombreProveedor: createProveedor.nombreProveedor,
      },
    });

    if (proveedor) {
      throw new BadGatewayException('Este proveedor ya existe');
    }
    const nuevo_proveedor = this.proveedorRepository.create(createProveedor);
    return this.proveedorRepository.save(nuevo_proveedor);
  }

  async findAll(): Promise<Proveedor[]> {
    return this.proveedorRepository.find({ relations: ['lotes'] });
  }

  async findOne(id: number): Promise<Proveedor> {
    const existe_proveedor = await this.proveedorRepository.findOne({
      where: {
        proveedorId: id,
      },
    });

    if (!existe_proveedor) {
      throw new NotFoundException('No se encontro el proveedor');
    }
    return existe_proveedor;
  }

  async update(
    id: number,
    updateProveedor: UpdateProveedorDto
  ): Promise<Proveedor> {
    const existe_proveedor = await this.proveedorRepository.findOne({
      where: {
        proveedorId: id,
      },
    });

    if (!existe_proveedor) {
      throw new NotFoundException('No se encontro el proveedor');
    }
    const update_proveedor = Object.assign(
      existe_proveedor,
      UpdateProveedorDto
    );
    return this.proveedorRepository.save(update_proveedor);
  }

  async remove(id: number): Promise<{ message: string }> {
    const existe_factura = await this.proveedorRepository.findOne({
      where: {
        proveedorId: id,
      },
    });

    if (!existe_factura) {
      throw new NotFoundException('No se existe el proveedor');
    }
    this.proveedorRepository.delete(id);
    return { message: 'Proveedor eliminado correctamente' };
  }
}
