import { Role } from "../role/entities/role.entity";

export interface Payload {
    sub: number;
    email: string;
    exp: number;
    role:Role;
    permissionCodes: string[];

}