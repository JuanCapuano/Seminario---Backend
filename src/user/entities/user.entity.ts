import { Role } from "src/auth/role/entities/role.entity";
import { Direccion } from "src/direccion/entities/direccion.entity";
import { EmpleoOfrecido } from "src/empleo-ofrecido/entities/empleo-ofrecido.entity";
import { FormularioCv } from "src/formulario-cv/entities/formulario-cv.entity";
import { SolicitudEmpleo } from "src/solicitud-empleo/entities/solicitud-empleo.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('users')   
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column({ unique: true })
    cuil: string;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;       
    @Column()
    telefono: string;


    @OneToMany(()=>EmpleoOfrecido, empleoofrecido => empleoofrecido.user )
    empleoofrecido:EmpleoOfrecido;

    @OneToMany(()=>SolicitudEmpleo, solicitud => solicitud.user )
    solictud:SolicitudEmpleo;

    @OneToOne(()=>FormularioCv, formulariocv => formulariocv.user )
    formulariocv:FormularioCv;

    @OneToOne(()=>Direccion, direccion => direccion.user )
    direccion:Direccion;


    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: 'id_role' })
    role: Role;

    get permissionCodes(): string[] {
    return this.role?.permissions?.map((perm) => perm.nombre) || [];
 }


}

