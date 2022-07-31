/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { GetEmployeeFilterDto } from './dto/getEmployeeFilter.dto';
import { Employee } from './employee.entity';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  findAllEmployee(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }
  /*
  findEmployeeFilter(employeeFilter: GetEmployeeFilterDto): Employee[] {
    const { name, office } = employeeFilter;
    let employee = this.findAllEmployee();
    if (office) {
      employee = employee.filter((job) => job.office);
    }
    if (name) {
      employee = employee.filter((name) => name.name);
    }
    return employee;
  }
*/
  async findEmployeeById(employee_id: number): Promise<Employee> {
    const employee_found = await this.employeeRepository.findOne(employee_id);
    if (!employee_found) {
      throw new NotFoundException('Ocorreu um erro de contrato');
    }
    return employee_found;
  }

  async creteEmployee(createEmployeeDto: CreateEmployeeDto) {
    const { name, cpf, office, birthday } = createEmployeeDto;
    const employees = new Employee();
    employees.nome = name;
    employees.cpf = cpf;
    employees.office = office;
    employees.birthday = birthday;
    employees.situation = 'activate';
    await employees.save();
    return employees;
  }

  async updateEmployee(
    employee_id: number,
    updateProdutoDto: UpdateEmployeeDto,
  ) {
    const funcupdate = await this.employeeRepository.preload({
      employee_id: employee_id,
      ...updateProdutoDto,
    });
    if (!funcupdate) {
      throw new NotFoundException(`Ocorreu um erro de contrato`);
    }

    return this.employeeRepository.save(funcupdate);
  }

  async deleteEmployee(employee_id: number): Promise<void> {
    const funcRemove = await this.employeeRepository.delete({
      employee_id,
    });
    if (!funcRemove) {
      throw new NotFoundException(`Ocorreu um ero de contrato`);
    }
  }
}
