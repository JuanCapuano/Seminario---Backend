import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sector')
export class Sector {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre: string;
    
}
