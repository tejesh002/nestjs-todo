import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notes {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  message: string;
}
