import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
//import { GetEmployeeFilterDto } from './dto/getEmployeeFilter.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('api/v1/employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}
  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAllEmployee();
  }
  /*
  @Get()
  findEmployee(
    @Query(ValidationPipe) filterEmployee: GetEmployeeFilterDto,
  ): Employee[] {
    if (Object.keys(filterEmployee).length) {
      return this.employeeService.findEmployeeFilter(filterEmployee);
    } else {
      return this.employeeService.findAllEmployee();
    }
  }
  */

  @Get('/:employee_id')
  findEmployeeById(
    @Param('employee_id') employee_id: string,
  ): Promise<Employee> {
    return this.employeeService.findEmployeeById(employee_id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createEmployee(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeService.creteEmployee(createEmployeeDto);
  }

  @Delete('/:employee_id')
  deleteEmployee(@Param('employee_id') employee_id: string): void {
    this.employeeService.deleteEmployee(employee_id);
  }
  @Put(':employee_id')
  async updateEmployee(
    @Param('employee_id') employee_id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeService.updateEmployee(employee_id, updateEmployeeDto);
  }
}
