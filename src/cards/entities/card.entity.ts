import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CardWorkers } from "./cardworker.entity";
import { Comments } from "../comments/entities/comment.entity";
import { BaseModel } from "src/common/entities/basemodel.entitiy";
import { Columns } from "src/columns/entities/column.entity";

@Entity({
  name: "cards",
})
export class Cards extends BaseModel {
  @Column({ type: "number", unique: true, nullable: false })
  columnId: number;

  @Column({ type: "varchar", nullable: false })
  title: string;

  @Column({ type: "varchar", nullable: false })
  content: string;

  @Column({ type: "bigint", nullable: false })
  orderByCards: number;

  @Column({ type: "bigint", nullable: false })
  tag: number;

  @Column({ type: "date", nullable: false })
  endDate: Date;

  @OneToMany(() => Comments, (comment) => comment.card, {
    eager: true,
  })
  comments: Comments[];

  @OneToMany(() => CardWorkers, (cardworker) => cardworker.cards, {
    eager: true,
  })
  cardworker: CardWorkers[];

  @ManyToOne(() => Columns, (column) => column.cards, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "columnId", referencedColumnName: "id" })
  column: Columns;
}
