import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "./board.entity";

@Entity({
    name: 'boardmember',
})
export class BoardMember {
    // 보드 맴버랑 유저랑 n: 1
    // card_workers n : 1
    // boards n : 1
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.boardmember, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name : 'userId', referencedColumnName: 'id'})
    user: User

    @ManyToOne(() => Board, (board) => board.boardmember, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name : 'boardId', referencedColumnName: 'id'})
    board: Board

    @OneToMany(() => Cardworker, (cardworker) => cardworker.boardmember)
    cardworker: Cardworker[];
}