import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsDate, IsPositive } from 'class-validator';

export class CreateFacturaDto {
  @IsDate()
  @Type(() => Date)
  fechaFactura: string;

  @IsNumber()
  @Type(() => Number)
  total: string;

  @IsInt()
  @IsPositive()
  pedidoPedidoId: number;

  @IsInt()
  @IsPositive()
  pagoPagoId: number;
}
