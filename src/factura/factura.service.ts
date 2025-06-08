import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Factura } from './entities/factura.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private readonly facturaRepository: Repository<Factura>
  ) {}

  async create(createFactura: CreateFacturaDto) {
    const nueva_factura = await this.facturaRepository.create(createFactura);

    return this.facturaRepository.save(nueva_factura);
  }

  async findAll(): Promise<Factura[]> {
    return await this.facturaRepository.find();
  }

  async findOne(id: number): Promise<Factura> {
    const existe_factura = await this.facturaRepository.findOne({
      where: {
        facturaId: id,
      },
    });

    if (!existe_factura) {
      throw new NotFoundException('No se encontro la factura');
    }

    return existe_factura;
  }

  async update(id: number, updateFactura: UpdateFacturaDto) {
    const existe_factura = await this.facturaRepository.findOne({
      where: {
        facturaId: id,
      },
    });

    if (!existe_factura) {
      throw new NotFoundException('No se encontro la factura');
    }

    const update_factura = Object.assign(existe_factura, updateFactura);
    return this.facturaRepository.save(update_factura);
  }

  async remove(id: number): Promise<{ message: string }> {
    const existe_factura = await this.facturaRepository.findOne({
      where: {
        facturaId: id,
      },
    });

    if (!existe_factura) {
      throw new NotFoundException('No se encontro la factura');
    }

    this.facturaRepository.delete(existe_factura);

    return { message: 'Factura eliminada correctamente' };
  }
}
