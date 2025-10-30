import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { Role } from 'src/auth/role/entities/role.entity';
@Entity('permissions')
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    nombre: string;
    
  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];

}
