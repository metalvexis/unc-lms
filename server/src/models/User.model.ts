import {
  Table,
  Model,
  PrimaryKey,
  ForeignKey,
  Column,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';
import { Faculty } from './Faculty.model';
@Table({ tableName: 'User', freezeTableName: true })
export class User extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  declare id: number;

  @ForeignKey(() => Faculty)
  @Column
  declare username: number;

  @BelongsTo(() => Faculty)
  declare faculty: Faculty;

  @Column
  declare password: string;

  @Column
  declare account_type: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
