/* eslint-disable prettier/prettier */
import { IsOptional } from 'class-validator';
import { EmployeeJob } from '../employee.entity';

export class UpdateEmployeeDto{
    @IsOptional()
    name: string;
    @IsOptional()
    cpf: string;
    @IsOptional()
    office: EmployeeJob
    @IsOptional()
    birthday: Date;
    @IsOptional()
    situation: string;
}
