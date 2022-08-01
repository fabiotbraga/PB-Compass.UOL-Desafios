/* eslint-disable prettier/prettier */
import { IsIn, IsNotEmpty, IsNumberString, MaxDate} from 'class-validator';
import { EmployeeJob } from '../employee.entity';

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string;
  
  @IsNumberString()
  @IsNotEmpty()
  readonly cpf: string;
  
  @IsIn([EmployeeJob.gerente, EmployeeJob.funcionario, EmployeeJob.caixa])
  @IsNotEmpty()
  office: EmployeeJob;

  @MaxDate(new Date())
  @IsNotEmpty()
  birthday: Date;
}
