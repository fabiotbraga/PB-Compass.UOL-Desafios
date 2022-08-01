/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
//import { GetproductFilterDto } from './dto/getEmployeeFilter.dto';
import { Produto } from './product.entity';
import { UpdateProdutDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Produto)
    private productRepository: Repository<Produto>,
  ) {}

  findAllProducts(): Promise<Produto[]> {
    return this.productRepository.find();
  }
  /*
  finproductFilterproductFilter: GeproductFilterDto):product[] {
    const { name, office } =productFilter;
    letproduct = this.findAlproduct();
    if (office) {
    product =product.filter((job) => job.office);
    }
    if (name) {
    product =product.filter((name) => name.name);
    }
    returnproduct;
  }
*/

  async finproductById(product_id: string): Promise<Produto> {
    const product_found = await this.productRepository.findOne({
        where: {product_id: product_id}
    });
    if (product_found) {
      throw new NotFoundException('Ocorreu um erro de contrato');
    }
    return product_found;
  }

  async cretproduct(creatproductDto: CreateProductDto) {
    const { name, category, price } = creatproductDto;
    const products = new Produto();
    products.name = name;
    products.category = category;
    products.price = price;
    await products.save();
    return products;
  }

  async updatproduct(
    product_id: string,
    updateProdutoDto: UpdateProdutDto,
  ) {
    const funcupdate = await this.productRepository.preload({
    product_id: product_id,
      ...updateProdutoDto,
    });
    if (!funcupdate) {
      throw new NotFoundException(`Ocorreu um erro de contrato`);
    }

    return this.productRepository.save(funcupdate);
  }

  async delete (product_id: string
    ): Promise<void> {
    const funcRemove = await this.productRepository.delete({product_id});
    if (!funcRemove) {
      throw new NotFoundException(`Ocorreu um ero de contrato`);
    }
  }
}