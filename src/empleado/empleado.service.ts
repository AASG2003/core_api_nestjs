import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Empleado } from './entities/empleado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmpleadoDto } from './dto/createEmpleado.dto';
import { UpdateEmpleadoDto } from './dto/updateEmpleado.dto';

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>
  ) {}

  async create(createEmpleado: CreateEmpleadoDto) {
    const empleado = await this.empleadoRepository.findOne({
      where: {
        empEmail: createEmpleado.empEmail,
        empCi: createEmpleado.empCi,
      },
    });

    if (empleado) {
      throw new BadGatewayException('Empleado ya existente');
    }
    const new_empleado = this.empleadoRepository.create(empleado);
    return this.empleadoRepository.save(new_empleado);
  }

  async findAll(): Promise<Empleado[]> {
    return await this.empleadoRepository.find();
  }

  async findOne(empCi: number): Promise<Empleado> {
    const existe_empleado = await this.empleadoRepository.findOne({
      where: {
        empCi: empCi,
      },
    });
    if (!existe_empleado) {
      throw new NotFoundException('No se encontro el empleado');
    }

    return existe_empleado;
  }

  async update(id: number, updateEmp: UpdateEmpleadoDto) {
    const existe_empleado = await this.empleadoRepository.findOne({
      where: {
        empleadoId: id,
      },
    });
    if (!existe_empleado) {
      throw new NotFoundException('Empleado no existe');
    }

    const updated_emp = Object.assign(existe_empleado, updateEmp);

    return this.empleadoRepository.save(updated_emp);
  }

  async remove(id: number): Promise<{ message: string }> {
    const existe_empleado = await this.empleadoRepository.findOne({
      where: {
        empleadoId: id,
      },
    });
    if (!existe_empleado) {
      throw new NotFoundException('Empleado no existe');
    }

    return { message: 'Empleado eliminado correctamente' };
  }
}
