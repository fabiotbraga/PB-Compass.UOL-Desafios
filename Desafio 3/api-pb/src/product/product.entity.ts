/* eslint-disable prettier/prettier */
import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Produto extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  product_id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column({
    type: 'float',
  })
  price: number;

  @BeforeInsert()
  generatedId() {
    if (this.product_id) {
      return;
    }

    this.product_id = uuidv4();
  }
}
