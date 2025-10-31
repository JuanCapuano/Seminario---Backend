import { CambioEstado } from "src/cambio-estado/entities/cambio-estado.entity";
import { Company } from "src/company/entities/company.entity";
import { Estado } from "src/estado/entities/estado.entity";
import { SolicitudEmpleo } from "src/solicitud-empleo/entities/solicitud-empleo.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('oferta_empleo')
export class OfertaEmpleo {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    puesto: string;
    @Column()
    descripcion: string;
    @Column()
    responsabilidad: string;
    @Column()
    modalidad: string;
    @Column()
    horario: string;
    @Column()
    requsitos: string;
    @Column()
    beneficios: string;

    @ManyToOne(() => Company, company => company.ofertaempleo)
    @JoinColumn({name: 'id_company'})
    company: Company

    @ManyToOne(()=> SolicitudEmpleo, solicitud => solicitud.ofertaempleo, {cascade:true})
    solictud: SolicitudEmpleo[];

    @ManyToOne(() => Estado, estado => estado.ofertaempleo)
    @JoinColumn({name: 'id_estado'})
    estado: Estado;

}
