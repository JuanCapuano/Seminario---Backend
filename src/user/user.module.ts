import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DireccionModule } from 'src/direccion/direccion.module';
import { FormularioCvModule } from 'src/formulario-cv/formulario-cv.module';
import { RoleModule } from 'src/auth/role/role.module';
import { SolicitudEmpleoModule } from 'src/solicitud-empleo/solicitud-empleo.module';
import { EmpleoOfrecidoModule } from 'src/empleo-ofrecido/empleo-ofrecido.module';

@Module({
  imports: [
    forwardRef(()=>DireccionModule),
    forwardRef(()=>FormularioCvModule),
    forwardRef(()=>RoleModule),
    forwardRef(()=>SolicitudEmpleoModule),
    forwardRef(()=>EmpleoOfrecidoModule),

  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],

})
export class UserModule {}
