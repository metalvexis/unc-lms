import {
  BelongsTo,
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
import { Period } from './Period.model';
import { Program } from './Program.model';

@Table({ tableName: 'ProgramHead', freezeTableName: true })
export class ProgramHead extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  declare id: number;

  @ForeignKey(() => Faculty)
  @Column
  declare faculty_id: number;

  @ForeignKey(() => Department)
  @Column
  declare dept_id: number;

  @ForeignKey(() => Program)
  @Column
  declare program_id: number;

  @ForeignKey(() => Period)
  @Column
  declare period_id: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @BelongsTo(() => Faculty)
  declare faculty: Faculty;
}
