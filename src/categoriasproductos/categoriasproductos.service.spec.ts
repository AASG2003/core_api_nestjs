import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasproductosService } from './categoriasproductos.service';

describe('CategoriasproductosService', () => {
  let service: CategoriasproductosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasproductosService],
    }).compile();

    service = module.get<CategoriasproductosService>(
      CategoriasproductosService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
