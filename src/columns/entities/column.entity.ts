
import { IsString } from "class-validator";
import { BaseModel } from "src/common/entities/base.entity";
import { Color } from "src/common/types/color.type";
import { Column } from "typeorm";

export abstract class Coulm extends BaseModel {

    @IsString()
    @Column({ unsigned: true })
    boardId: number;

    @Column()
    title: string;

    @Column({ type: 'enum', enum: Color, default: Color.BLACK })
    color: Color;

    @Column({ type: 'number', nullable: false })
    orderByColumns: number;
}