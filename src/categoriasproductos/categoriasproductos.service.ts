import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoriasproductoDto } from './dto/create-categoriasproducto.dto';
import { UpdateCategoriasproductoDto } from './dto/update-categoriasproducto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaProducto } from './entities/categoriasproducto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasproductosService {
  constructor(
    @InjectRepository(CategoriaProducto)
    private readonly categoriasproductosReposity: Repository<CategoriaProducto>,
  ) {}
  async create(createCategoriasproductoDto: CreateCategoriasproductoDto) {
    console.log(createCategoriasproductoDto);
    const categoria_existente = await this.categoriasproductosReposity.findOne({
      where: {
        nombreCategoria: createCategoriasproductoDto.nombreCategoria,
      },
    });
    if (categoria_existente) {
      throw new BadRequestException('categoria ya existente');
    }
    const nuevaCategoria = await this.categoriasproductosReposity.create(
      createCategoriasproductoDto,
    );
    return this.categoriasproductosReposity.save(nuevaCategoria);
  }

  async findAll(): Promise<CategoriaProducto[]> {
    return await this.categoriasproductosReposity.find();
  }

  async findOne(id: number): Promise<CategoriaProducto> {
    const categoria = await this.categoriasproductosReposity.findOne({
      where: {
        categoriaId: id,
      },
    });
    return categoria;
  }

  async update(
    id: number,
    updateCategoriasproductoDto: UpdateCategoriasproductoDto,
  ) {
    const categoria = await this.categoriasproductosReposity.findOne({
      where: {
        categoriaId: id,
      },
    });

    if (!categoria) {
      throw new NotFoundException('Categoria no encontrada');
    }
    const actualizar_categoria = Object.assign(
      categoria,
      updateCategoriasproductoDto,
    );
    return this.categoriasproductosReposity.save(actualizar_categoria);
  }

  async remove(eliminarCategoria: number): Promise<{ message: string }> {
    const categoria = await this.categoriasproductosReposity.findOne({
      where: {
        categoriaId: eliminarCategoria,
      },
    });
    if (!categoria) {
      throw new NotFoundException('Categoria no existente');
    }
    await this.categoriasproductosReposity.remove(categoria);

    return { message: 'Se elimino correctamente la categoria' };
  }
}
