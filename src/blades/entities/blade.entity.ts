import {
    Column,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';

@Entity()
export class Blade {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        unique: true,
    })
    name: string;

    @Column()
    element: string;
}
