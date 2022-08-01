/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { EmployeeJob } from '../employee.entity';

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  office: EmployeeJob;

  @IsNotEmpty()
  birthday: Date;
}
