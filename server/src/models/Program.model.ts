import {
  HasMany,
  BelongsTo,
  BelongsToMany,
  ForeignKey,
  DataType,
  Table,
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Department } from './Department.model';
import { ProgramHead } from './ProgramHead.model';
import { ProgramOutcome } from './ProgramOutcome.model';
import { Faculty } from './Faculty.model';
import { Period } from './Period.model';

@Table({ tableName: 'Program', freezeTableName: true })
export class Program extends Model {
  @PrimaryKey
  @Column({autoIncrement: true})
  declare id: number;

  @ForeignKey(() => Department)
  @Column
  declare dept_id: number;

  @BelongsTo(() => Department, 'dept_id')
  declare department: Department;

  @BelongsToMany(() => Faculty, () => ProgramHead)
  declare program_head: ProgramHead[];

  @BelongsToMany(() => Period, () => ProgramHead)
  declare period: Period[];

  @HasMany(() => ProgramOutcome, 'program_id')
  declare program_outcomes: ProgramOutcome[];

  @Column({
    type: DataType.STRING(10),
    unique: true,
  })
  declare program_code: string;

  @Column(DataType.STRING(100))
  declare program_name: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
