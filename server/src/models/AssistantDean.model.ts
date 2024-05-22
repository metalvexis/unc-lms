import {
  Table,
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from 'sequelize-typescript';
import { Faculty } from './Faculty.model';
import { Department } from './Department.model';

@Table({ tableName: 'AssistantDean', freezeTableName: true })
export class AssistantDean extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  declare id: number;

  @ForeignKey(() => Faculty)
  @Column
  declare faculty_id: number;

  @ForeignKey(() => Department)
  @Column
  declare dept_id: number;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
