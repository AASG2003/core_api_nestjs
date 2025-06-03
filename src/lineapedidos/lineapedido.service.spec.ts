import { Test, TestingModule } from '@nestjs/testing';
import { LineapedidoService } from './lineapedido.service';

describe('LineapedidoService', () => {
  let service: LineapedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineapedidoService],
    }).compile();

    service = module.get<LineapedidoService>(LineapedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
