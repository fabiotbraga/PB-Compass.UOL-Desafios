/* eslint-disable prettier/prettier */
import { IsOptional } from 'class-validator';

export class UpdateProdutDto {
  @IsOptional()
  name: string;
  @IsOptional()
  category: string;
  @IsOptional()
  price: number;
}
