import { IsString } from "class-validator";
import { BaseModel } from "src/common/entities/base.entity";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class Coulm extends BaseModel {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column({ unsigned: true })
    boardId: number;

    @Column()
    title: string;

    @Column({ type: enum })
    color

    @UpdateDateColumn()
    updatedAt: Date;
    @CreateDateColumn()
    createdAt: Date;
}