/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumberString, MinDate } from 'class-validator';
import { EmployeeJob } from '../employee.entity';

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string;
  
  @IsNumberString()
  @IsNotEmpty()
  readonly cpf: string;

  @IsNotEmpty()
  office: EmployeeJob;

  @MinDate(new Date())
  @IsNotEmpty()
  birthday: Date;
}
