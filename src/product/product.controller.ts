import { Controller, Get, Param } from '@nestjs/common';
import { Product } from 'src/core';
import { ProductPrisma } from './product.prisma';

@Controller('products')
export class ProductController {
  constructor(readonly repo: ProductPrisma) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.repo.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    return this.repo.findById(+id);
  }
}
