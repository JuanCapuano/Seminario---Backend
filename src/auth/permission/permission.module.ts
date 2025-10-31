import { forwardRef, Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { RoleModule } from '../role/role.module';

@Module({
  imports:[forwardRef(()=>RoleModule)],
  controllers: [PermissionController],
  providers: [PermissionService],
  exports:[PermissionService],
})
export class PermissionModule {}
