import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [EmployeeModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
