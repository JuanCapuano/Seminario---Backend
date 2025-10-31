import { forwardRef, Module } from '@nestjs/common';
import { SolicitudEmpleoService } from './solicitud-empleo.service';
import { SolicitudEmpleoController } from './solicitud-empleo.controller';
import { OfertaEmpleo } from 'src/oferta-empleo/entities/oferta-empleo.entity';
import { OfertaEmpleoModule } from 'src/oferta-empleo/oferta-empleo.module';
import { EstadoModule } from 'src/estado/estado.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[
    forwardRef(()=>OfertaEmpleoModule),
    forwardRef(()=>EstadoModule),
    forwardRef(()=>UserModule),
  ],
  controllers: [SolicitudEmpleoController],
  providers: [SolicitudEmpleoService],
  exports:[SolicitudEmpleoService],
})
export class SolicitudEmpleoModule {}
