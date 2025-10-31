import { forwardRef, Module } from '@nestjs/common';
import { OfertaEmpleoService } from './oferta-empleo.service';
import { OfertaEmpleoController } from './oferta-empleo.controller';
import { SolicitudEmpleoModule } from 'src/solicitud-empleo/solicitud-empleo.module';
import { EstadoModule } from 'src/estado/estado.module';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports:[
    forwardRef(() => SolicitudEmpleoModule),
    forwardRef(() => EstadoModule),
    forwardRef(() => CompanyModule),
  ],
  controllers: [OfertaEmpleoController],
  providers: [OfertaEmpleoService],
  exports:[OfertaEmpleoService],
})
export class OfertaEmpleoModule {}
