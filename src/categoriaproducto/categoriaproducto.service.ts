import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoriaProducto } from './entities/categoriaproducto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoriaProductoDto } from './dto/create-categoriaproducto.dto';
import { UpdateCategoriaProductosDto } from './dto/update-categoriaproducto.dto';

@Injectable()
export class CategoriaProductosService {
  constructor(
    @InjectRepository(CategoriaProducto)
    private readonly categoriaproductosRepository: Repository<CategoriaProducto>
  ) {}

  async create(categoriaProducto: CreateCategoriaProductoDto) {
    const categoria = await this.categoriaproductosRepository.findOne({
      where: {
        nombreCategoria: categoriaProducto.nombreCategoria,
      },
    });

    if (categoria) {
      throw new BadGatewayException('Nombre de la categoria ya existente');
    }
    const nueva_categoria =
      this.categoriaproductosRepository.create(categoriaProducto);
    return this.categoriaproductosRepository.save(nueva_categoria);
  }

  async findAll(): Promise<CategoriaProducto[]> {
    return await this.categoriaproductosRepository.find();
  }

  async findOne(nombre: string): Promise<CategoriaProducto> {
    const existe_categoria = await this.categoriaproductosRepository.findOne({
      where: {
        nombreCategoria: nombre,
      },
    });

    if (!existe_categoria) {
      throw new NotFoundException('No existe la categoria');
    }

    return existe_categoria;
  }

  async update(id: number, categoriaproducto: UpdateCategoriaProductosDto) {
    const categoria = await this.categoriaproductosRepository.findOne({
      where: {
        categoriaId: id,
      },
    });

    if (!categoria) {
      throw new NotFoundException('No se encontro la categoria');
    }

    const update_categoria = Object.assign(categoria, categoriaproducto);

    return this.categoriaproductosRepository.save(update_categoria);
  }

  async remove(id: number): Promise<{ message: string }> {
    const categoria = await this.categoriaproductosRepository.findOne({
      where: {
        categoriaId: id,
      },
    });

    if (!categoria) {
      throw new NotFoundException('No se encontro la categoria');
    }

    return { message: 'Categoria eliminada correctamente ' };
  }
}
