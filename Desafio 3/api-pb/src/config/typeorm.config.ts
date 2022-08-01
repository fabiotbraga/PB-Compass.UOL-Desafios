/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Employee } from 'src/employee/employee.entity';
import { Produto } from 'src/product/product.entity';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'cachorro',
  database: 'api-pb',
  entities: [Employee,Produto],
  synchronize: true,
}