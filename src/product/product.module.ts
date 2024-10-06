import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductPrisma } from './product.prisma';

@Module({
  controllers: [ProductController],
  providers: [ProductPrisma],
})
export class ProductModule {}
