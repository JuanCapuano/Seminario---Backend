
import { FormularioCv } from "src/formulario-cv/entities/formulario-cv.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('experiencia')
export class Experiencia {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombreempresa: string;
    @Column()
    puesto: string;
    @Column()
    anioinicio: Date;
    @Column()
    aniofin: Date;


    @ManyToOne (()=> FormularioCv, formulariocv=>formulariocv.experiencia)
    @JoinColumn({name:'id_formulariocv'})
    fomulariocv:FormularioCv; 


}
