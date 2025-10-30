import { Estado } from "src/estado/entities/estado.entity";
import { OfertaEmpleo } from "src/oferta-empleo/entities/oferta-empleo.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('solicitud_empleo')
export class SolicitudEmpleo {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    fechasolicitud: Date;

    @ManyToOne(() => OfertaEmpleo, ofertaempleo => ofertaempleo.solictud)
    @JoinColumn({name: 'id_ofertaempleo'})
    ofertaempleo: OfertaEmpleo;

    @ManyToOne(() => User, user => user.solictud)
    @JoinColumn({name: 'id_user'})
    user: User;

    @ManyToOne(() => Estado, estado => estado.solicitudempleo)
    @JoinColumn({name: 'id_estado'})
    estado: Estado;




}
