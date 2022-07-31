/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeJob } from './employeeEnum';

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  office: EmployeeJob;

  @Column()
  birthday: Date;

  @Column()
  situation: string;
}
