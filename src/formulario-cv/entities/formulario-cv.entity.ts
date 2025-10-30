import { Estudio } from "src/estudio/entities/estudio.entity";
import { Experiencia } from "src/experiencia/entities/experiencia.entity";
import { Idioma } from "src/idioma/entities/idioma.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('formulario_cv')
export class FormularioCv {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:'bytea'})
    cv:Buffer;
    @Column()
    aptitudes: string


    @OneToMany(()=>Experiencia,experiencia => experiencia.fomulariocv,{cascade:true} )
    experiencia: Experiencia[];

    @OneToMany(()=>Estudio,estudio => estudio.fomulariocv,{cascade:true} )
    estudio: Estudio[];

    @OneToMany(()=>Idioma, idioma => idioma.fomulariocv,{cascade:true} )
    idioma: Idioma[];

    @OneToOne(()=> User, user => user.formulariocv)
    user:User;
}
