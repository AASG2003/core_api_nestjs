import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lote } from './entities/lote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';

@Injectable()
export class LoteService {
  constructor(
    @InjectRepository(Lote)
    private readonly loteRepository: Repository<Lote>
  ) {}

  async create(createLote: CreateLoteDto) {
    const nuevo_lote = await this.loteRepository.create(createLote);
    return this.loteRepository.save(nuevo_lote);
  }

  async findAll(): Promise<Lote[]> {
    return await this.loteRepository.find();
  }

  async findOne(id: number): Promise<Lote> {
    const existe_lote = this.loteRepository.findOne({
      where: {
        loteId: id,
      },
    });

    if (!existe_lote) {
      throw new NotFoundException('No se encontro el lote');
    }

    return existe_lote;
  }

  async update(id: number, updateLote: UpdateLoteDto) {
    const existe_lote = await this.loteRepository.findOne({
      where: {
        loteId: id,
      },
    });

    if (!existe_lote) {
      throw new NotFoundException('No se encontro el Lote');
    }

    const update_lote = Object.assign(existe_lote, updateLote);
    return this.loteRepository.save(update_lote);
  }

  async remove(id: number): Promise<{ message: string }> {
    const lote = await this.loteRepository.findOne({
      where: {
        loteId: id,
      },
    });

    if (!lote) {
      throw new NotFoundException('No se encontro Lote');
    }

    this.loteRepository.delete(lote);

    return { message: 'Se elimino correctamente el lote' };
  }
}
