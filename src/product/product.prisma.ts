import { Global, Injectable } from '@nestjs/common';
import { Product } from 'src/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Global()
@Injectable()
export class ProductPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany() as any;
  }

  async findById(id: number): Promise<Product | null> {
    return (this.prisma.product.findUnique({ where: { id } }) as any) ?? null;
  }
}
