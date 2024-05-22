import {
  DataType,
  Table,
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import type { ENUM_PERIOD } from '../types';

@Table({ tableName: 'Period', freezeTableName: true })
export class Period extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  declare id: number;

  @Column(DataType.STRING(4))
  declare school_yr: string;

  @Column
  declare sem: ENUM_PERIOD;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
