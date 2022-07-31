/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
@Module ({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    EmployeeModule, 
    ProductModule],
})
export class AppModule {}