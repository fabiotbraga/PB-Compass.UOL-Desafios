/* eslint-disable prettier/prettier */
import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  employee_id: string;

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

  @BeforeInsert()
  generatedId() {
    if (this.employee_id) {
      return;
    }

    this.employee_id = uuidv4();
  }
}

export enum EmployeeJob {
    gerente = 'gerente',
    funcionario = 'funcionario',
    caixa = 'caixa',
  }
