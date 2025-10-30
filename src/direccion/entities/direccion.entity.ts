import { Company } from "src/company/entities/company.entity";
import { Localidad } from "src/localidad/entities/localidad.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('direccion')
export class Direccion {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    calle: string;
    @Column()
    numero: string;

    @ManyToOne (()=>Localidad, localidad=>localidad.direccion,{eager: true})
    @JoinColumn({name:'id_localidad'})
    localidad:Localidad;  
    
    @OneToOne(()=>User,user => user.direccion)
    user: User;

    @OneToOne(()=>Company,company => company.direccion)
    company:Company;


}

