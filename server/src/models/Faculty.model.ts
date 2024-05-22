import {
  DataType,
  Table,
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { Department } from './Department.model';
import { Dean } from './Dean.model';
import { AssistantDean } from './AssistantDean.model';
import { ProgramHead } from './ProgramHead.model';
import { User } from './User.model';
import { Period } from './Period.model';

@Table({ tableName: 'Faculty', freezeTableName: true })
export class Faculty extends Model {
  @PrimaryKey
  @Column
  declare id: number;

  @Column(DataType.STRING(50))
  declare lastname: string;

  @Column(DataType.STRING(50))
  declare middlename: string;

  @Column(DataType.STRING(50))
  declare firstname: string;

  @Column(DataType.STRING(50))
  declare educ_attainment: string;

  @Column(DataType.STRING(2))
  declare mother_dept: string;

  @Column
  declare status: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @BelongsToMany(() => Department, () => Dean)
  declare asDean: Department[];

  @BelongsToMany(() => Department, () => AssistantDean)
  declare asAssistantDean: Department[];

  @BelongsToMany(() => Department, () => ProgramHead)
  declare asProgramHead: Department[];

  @BelongsToMany(() => Period, () => ProgramHead)
  declare period: Period[];

  @HasMany(() => User, 'username')
  declare user: User[];
}
