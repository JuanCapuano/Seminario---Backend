import { Localidad } from "src/localidad/entities/localidad.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('provincia')
export class Provincia {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre: string;

    @OneToMany(()=>Localidad,localidad => localidad.provincia)
    localidad:Localidad[];
}
