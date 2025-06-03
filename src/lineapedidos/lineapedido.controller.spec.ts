import { Test, TestingModule } from '@nestjs/testing';
import { LineapedidoController } from './lineapedido.controller';
import { LineapedidoService } from './lineapedido.service';

describe('LineapedidoController', () => {
  let controller: LineapedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LineapedidoController],
      providers: [LineapedidoService],
    }).compile();

    controller = module.get<LineapedidoController>(LineapedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
