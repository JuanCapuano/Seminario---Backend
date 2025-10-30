import { User } from "src/user/entities/user.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('empleo_ofrecido')
export class EmpleoOfrecido {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    puesto: string;
    @Column()
    descripcion: string;


    @ManyToOne(() => User, user => user.empleoofrecido, { eager: true })
    @JoinColumn({ name: 'id_user' })
    user: User;

    



    
}
