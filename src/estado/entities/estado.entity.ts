import { OfertaEmpleo } from "src/oferta-empleo/entities/oferta-empleo.entity";
import { SolicitudEmpleo } from "src/solicitud-empleo/entities/solicitud-empleo.entity";
import { OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Column, Entity } from "typeorm";

@Entity('estado')
export class Estado {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    valor: string;

    @OneToMany(()=> OfertaEmpleo,ofertaempleo => ofertaempleo.estado)
    ofertaempleo:OfertaEmpleo;

    @OneToMany(()=> SolicitudEmpleo,solicitudempleo => solicitudempleo.estado)
    solicitudempleo:SolicitudEmpleo;

}
