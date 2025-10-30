import { FormularioCv } from 'src/formulario-cv/entities/formulario-cv.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
@Entity('estudio') 
export class Estudio {

    @PrimaryGeneratedColumn()
    id: number;     
    @Column()
    institucion: string;
    @Column()
    titulo: string;
    @Column()
    nivelestudio: string;
    @Column()
    aniofinalizacion: Date;
    @Column()
    anioinicio: Date;


    @ManyToOne (()=> FormularioCv, formulariocv=>formulariocv.estudio)
    @JoinColumn({name:'id_formulariocv'})
    fomulariocv:FormularioCv;   

}
