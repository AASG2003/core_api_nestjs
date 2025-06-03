import { Module } from '@nestjs/common';
import { CategoriasproductosService } from './categoriasproductos.service';
import { CategoriasproductosController } from './categoriasproductos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaProducto } from './entities/categoriasproducto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaProducto])],
  controllers: [CategoriasproductosController],
  providers: [CategoriasproductosService],
})
export class CategoriasproductosModule {}
