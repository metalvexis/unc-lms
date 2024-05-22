import {
  ForeignKey,
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
import { PEO } from './PEO.model';
import { PEO_PO_Alignment } from './PEO_PO_Alignment.model';
@Table({ tableName: 'ProgramOutcome', freezeTableName: true })
export class ProgramOutcome extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  declare id: number;

  @ForeignKey(() => Program)
  @Column
  declare program_id: number;

  @BelongsTo(() => Program)
  declare program: Program;

  @BelongsToMany(() => PEO, () => PEO_PO_Alignment)
  declare peos: PEO[];

  @Column
  declare po_desc: string;

  @Column
  declare seq_no: number;

  @Column
  declare program_code: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
