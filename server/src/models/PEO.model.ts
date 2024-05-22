import {
  ForeignKey,
  DataType,
  Table,
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Program } from './Program.model';
import { ProgramOutcome } from './ProgramOutcome.model';
import { PEO_PO_Alignment } from './PEO_PO_Alignment.model';

@Table({ tableName: 'PEO', freezeTableName: true })
export class PEO extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  declare id: number;

  @ForeignKey(() => Program)
  @Column
  declare program_id: number;

  @BelongsTo(() => Program, 'program_id')
  declare program: Program;

  @BelongsToMany(() => ProgramOutcome, () => PEO_PO_Alignment)
  declare programOutcomes: ProgramOutcome[];

  @Column(DataType.STRING(500))
  declare peo_desc: string;

  @Column
  declare seq_no: number;

  @Column(DataType.STRING(10))
  declare program_code: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
