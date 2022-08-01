import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
//import { GetEmployeeFilterDto } from './dto/getEmployeeFilter.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProdutDto } from './dto/update-product.dto';
import { Produto } from './product.entity';
import { ProductService } from './product.service';

@Controller('api/v1/product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async findAll(): Promise<Produto[]> {
    return this.productService.findAllProducts();
  }
  /*
    @Get()
    findproduct(
      @Query(ValidationPipe) filterproduct: GetproductFilterDto,
    ): product[] {
      if (Object.keys(filterproduct).length) {
        return this.productService.findproductFilter(filterproduct);
      } else {
        return this.productService.findAllproduct();
      }
    }
    */

  @Get('/:product_id')
  findproductById(@Param('product_id') product_id: string): Promise<Produto> {
    return this.productService.finproductById(product_id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createproduct(@Body() createproductDto: CreateProductDto): Promise<Produto> {
    return this.productService.cretproduct(createproductDto);
  }

  @Delete('/:product_id')
  deleteproduct(@Param('product_id') product_id: string): void {
    this.productService.delete(product_id);
  }
  @Put(':product_id')
  async updateproduct(
    @Param('product_id') product_id: string,
    @Body() updateproductDto: UpdateProdutDto,
  ): Promise<Produto> {
    return this.productService.updatproduct(product_id, updateproductDto);
  }
}
