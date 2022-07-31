/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'cachorro',
  database: 'api-testing',
  entities: [__dirname + '/../**/*.entitty'],
  synchronize: true,
}