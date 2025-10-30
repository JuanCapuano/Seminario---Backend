import { CanActivate, ExecutionContext, Injectable, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/user/user.service';
import { CompanyService } from 'src/company/company.service';
import { RequestWithUser } from '../interfaces/request';
import { User } from 'src/user/entities/user.entity';
import { Company } from 'src/company/entities/company.entity';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private usersService: UserService,
    private companyService: CompanyService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: RequestWithUser = context.switchToHttp().getRequest();
    const payload = request.user; // esto ya viene de la estrategia
    if (!payload) throw new UnauthorizedException('No autenticado');

    // Traemos la entidad según el role
    let entity: User | Company;
    if (payload.role.nombre === 'usuario') {
      entity = await this.usersService.findByEmail(payload.email);
    } else if (payload.role.nombre === 'empresa') {
      entity = await this.companyService.findByEmail(payload.email);
    } else {
      throw new UnauthorizedException('Role inválido');
    }

    request.user = entity;

    // Permisos requeridos por el endpoint
    const requiredPermissions = this.reflector.get<string[]>('permissions', context.getHandler()) || [];
    if (requiredPermissions.length === 0) return true;
    
    
    const entityPermissions = entity.permissionCodes;
    const hasPermission = requiredPermissions.every(p => entityPermissions.includes(p));
    if (!hasPermission) throw new ForbiddenException('No tienes permisos suficientes');

    return true;
  }
}
