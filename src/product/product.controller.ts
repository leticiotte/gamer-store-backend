import { Controller, Get, Param } from '@nestjs/common';
import { Product, products } from 'src/core';

@Controller('products')
export class ProductController {
  @Get()
  getAll(): Product[] {
    return products;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    return products.find((p) => p.id === +id) ?? null;
  }
}
