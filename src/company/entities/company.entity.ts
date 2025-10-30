import { Role } from "src/auth/role/entities/role.entity";
import { Direccion } from "src/direccion/entities/direccion.entity";
import { OfertaEmpleo } from "src/oferta-empleo/entities/oferta-empleo.entity";
import { Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column({ unique: true })
    cuit: string;
    @Column()
    telefono: string;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;


    @OneToMany(() => OfertaEmpleo, ofertaempleo => ofertaempleo.company)
    ofertaempleo: OfertaEmpleo;

    @OneToOne(() => Direccion, direccion => direccion.company)
    direccion:Direccion;

    @ManyToOne(() => Role, (role) => role.companies)
    @JoinColumn({ name: 'id_role' })
    role: Role;

    
 get permissionCodes(): string[] {
    return this.role?.permissions?.map((perm) => perm.nombre) || [];
  }
}


