import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import User from './User';

@Entity('students')
class Students {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    create_user_id: string;

    @Column()
    nome: string;

    @ManyToOne(()=> User)
    @JoinColumn({name: 'create_user_id'})
    user: User;

    @Column()
    age: number;

    @Column()
    address: string;

    @Column()
    material_list: string;
    
    @CreateDateColumn()
    created_at: Date

    @Column()
    contact: string
}

export default Students;