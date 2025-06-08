import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaProducto } from './entities/categoriaproducto.entity';
import { CategoriaProductosService } from './categoriaproducto.service';
import { CategoriaProductoController } from './categoriaproducto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaProducto])],
  providers: [CategoriaProductosService],
  controllers: [CategoriaProductoController],
})
export class CategoriaProductoModule {}
