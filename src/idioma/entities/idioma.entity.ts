import { FormularioCv } from "src/formulario-cv/entities/formulario-cv.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('idioma')
export class Idioma {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    nivelidioma:string;
    

    @ManyToOne (()=> FormularioCv, formulariocv=>formulariocv.idioma)
    @JoinColumn({name:'id_formulariocv'})
    fomulariocv:FormularioCv; 
    
}
