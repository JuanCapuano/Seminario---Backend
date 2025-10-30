import { Permission } from "src/auth/permission/entities/permission.entity";
import { Company } from "src/company/entities/company.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

@Entity ('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    nombre: string;

    @ManyToMany(() => Permission,(permission) => permission.roles)
    @JoinTable()
    permissions: Permission[];

    @OneToMany(() => User, (user) => user.role)
    users: User[];

    @OneToMany(() => Company, (company) => company.role)
    companies: Company[];

}
