import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasproductosController } from './categoriasproductos.controller';
import { CategoriasproductosService } from './categoriasproductos.service';

describe('CategoriasproductosController', () => {
  let controller: CategoriasproductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriasproductosController],
      providers: [CategoriasproductosService],
    }).compile();

    controller = module.get<CategoriasproductosController>(
      CategoriasproductosController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
