import {
  Table,
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { PEO } from './PEO.model';
import { ProgramOutcome } from './ProgramOutcome.model';

@Table({ tableName: 'PEO_PO_Alignment', freezeTableName: true })
export class PEO_PO_Alignment extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  declare id: number;

  @ForeignKey(() => ProgramOutcome)
  @Column
  declare po_id: number;

  @BelongsTo(() => ProgramOutcome)
  declare programOutcome: ProgramOutcome;

  @ForeignKey(() => PEO)
  @Column
  declare peo_id: number;

  @BelongsTo(() => PEO)
  declare peo: PEO;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
