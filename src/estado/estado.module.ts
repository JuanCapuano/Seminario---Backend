import { forwardRef, Module } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { EstadoController } from './estado.controller';
import { SolicitudEmpleo } from 'src/solicitud-empleo/entities/solicitud-empleo.entity';
import { SolicitudEmpleoModule } from 'src/solicitud-empleo/solicitud-empleo.module';
import { OfertaEmpleoModule } from 'src/oferta-empleo/oferta-empleo.module';

@Module({
  imports:[
    forwardRef(()=>SolicitudEmpleoModule),
    forwardRef(()=>OfertaEmpleoModule),
  ],
  controllers: [EstadoController],
  providers: [EstadoService],
  exports:[EstadoService]
})
export class EstadoModule {}
