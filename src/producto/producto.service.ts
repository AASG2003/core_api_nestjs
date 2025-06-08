import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Productos } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Productos)
    private readonly productRepository: Repository<Productos>
  ) {}

  async create(createProducto: CreateProductoDto) {
    const producto = await this.productRepository.findOne({
      where: {
        nombreProducto: createProducto.nombreProducto,
      },
    });

    if (producto) {
      throw new BadGatewayException('Este producto ya existe');
    }

    const nuevo_producto = this.productRepository.create(createProducto);
    return this.productRepository.save(nuevo_producto);
  }

  async findAll(): Promise<Productos[]> {
    return await this.productRepository.find();
  }

  async findOne(nombre: string): Promise<Productos> {
    const existe_producto = await this.productRepository.findOne({
      where: {
        nombreProducto: nombre,
      },
    });

    if (!existe_producto) {
      throw new NotFoundException('No se encontro el producto');
    }

    return existe_producto;
  }

  async update(id: number, updateProducto: UpdateProductoDto) {
    const existe_producto = await this.productRepository.findOne({
      where: {
        productoId: id,
      },
    });

    if (!existe_producto) {
      throw new NotFoundException('No se encontro el producto');
    }

    const update_producto = Object.assign(existe_producto, updateProducto);

    return this.productRepository.save(update_producto);
  }

  async remove(id: number): Promise<{ message: string }> {
    const existe_producto = await this.productRepository.findOne({
      where: {
        productoId: id,
      },
    });

    if (!existe_producto) {
      throw new NotFoundException('Producto no existente');
    }

    this.productRepository.delete(existe_producto);

    return { message: 'Productos eliminado exitosamente' };
  }
}
