import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from 'typeorm';
import User from './User';

@Entity('students')
class Students {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    create_user_id: string;

    @Column()
    nome: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @Column()
    material_list: string;
    
    @Column()
    creator_user_id: string;
    
    @CreateDateColumn()
    created_at: Date
}

export default Students;