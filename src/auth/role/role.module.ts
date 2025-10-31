import { forwardRef, Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { PermissionModule } from '../permission/permission.module';

@Module({
  imports:[forwardRef(()=>PermissionModule)],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
