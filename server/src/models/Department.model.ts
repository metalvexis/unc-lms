import {
  DataType,
  Table,
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { Faculty } from './Faculty.model';
import { Dean } from './Dean.model';
import { AssistantDean } from './AssistantDean.model';
import { ProgramHead } from './ProgramHead.model';

@Table({ tableName: 'Department', freezeTableName: true })
export class Department extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  declare id: number;

  @Column({
    type: DataType.CHAR(100),
  })
  declare department_name: string;

  @Column({
    type: DataType.CHAR(2),
  })
  declare department_code: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @BelongsToMany(() => Faculty, () => Dean)
  declare asDean: Faculty[];

  @BelongsToMany(() => Faculty, () => AssistantDean)
  declare asAssistantDean: Faculty[];

  @BelongsToMany(() => Faculty, () => ProgramHead)
  declare asProgramHead: Faculty[];
}
