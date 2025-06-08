import { CreatePagoDto } from './create-pago.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdatePagoDto extends PartialType(CreatePagoDto) {}
