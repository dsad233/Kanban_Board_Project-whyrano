import { IsString } from "class-validator";
import { BaseModel } from "src/common/entities/basemodel.entitiy";
import { Color } from "src/common/types/color.type";
import { Column } from "typeorm";

export class Columns extends BaseModel {
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