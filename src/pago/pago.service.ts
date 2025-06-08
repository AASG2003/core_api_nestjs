import {
  Injectable,
  Body,
  Param,
  Get,
  Patch,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pago } from './entities/pago.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';

export class PagoService {
  constructor(
    @InjectRepository(Pago)
    private readonly pagoRepository: Repository<Pago>
  ) {}

  async create(createPago: CreatePagoDto) {
    const nuevo_pago = await this.pagoRepository.create(createPago);
    return this.pagoRepository.save(nuevo_pago);
  }

  async findAll(): Promise<Pago[]> {
    return await this.pagoRepository.find();
  }

  async findOne(id: number): Promise<Pago> {
    const pago = await this.pagoRepository.findOne({
      where: {
        pagoId: id,
      },
    });

    if (!pago) {
      throw new NotFoundException('Pago no encontrado');
    }

    return pago;
  }

  async update(id: number, updatePago: UpdatePagoDto) {
    const pago = await this.pagoRepository.findOne({
      where: {
        pagoId: id,
      },
    });

    const nuevo_pago = Object.assign(pago, updatePago);
    return this.pagoRepository.save(nuevo_pago);
  }

  async remove(id: number): Promise<{ message: string }> {
    const pago = await this.pagoRepository.findOne({
      where: {
        pagoId: id,
      },
    });

    if (!pago) {
      throw new NotFoundException('Este pago no existe');
    }

    this.pagoRepository.delete(pago);
    return { message: 'Pago eliminado exitosamente' };
  }
}
