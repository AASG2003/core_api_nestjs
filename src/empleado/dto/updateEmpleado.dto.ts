import { PartialType } from '@nestjs/swagger';
import { CreateEmpleadoDto } from './createEmpleado.dto';

export class UpdateEmpleadoDto extends PartialType(CreateEmpleadoDto) {}
