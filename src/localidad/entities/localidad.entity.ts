import { Direccion } from "src/direccion/entities/direccion.entity";
import { Provincia } from "src/provincia/entities/provincia.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity('localidad')
export class Localidad {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    codigopostal:string

    @ManyToOne (()=> Provincia, provincia=>provincia.localidad)
    @JoinColumn({name:'id_provincia'})
    provincia:Provincia; 

    @OneToMany(()=>Direccion, direccion => direccion.localidad )
    direccion: Direccion[];


}
