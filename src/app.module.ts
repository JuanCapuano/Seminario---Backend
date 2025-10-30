import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { OfertaEmpleoModule } from './oferta-empleo/oferta-empleo.module';
import { SolicitudEmpleoModule } from './solicitud-empleo/solicitud-empleo.module';
import { DireccionModule } from './direccion/direccion.module';
import { FormularioCvModule } from './formulario-cv/formulario-cv.module';
import { EmpleoOfrecidoModule } from './empleo-ofrecido/empleo-ofrecido.module';
import { LocalidadModule } from './localidad/localidad.module';
import { IdiomaModule } from './idioma/idioma.module';
import { ExperienciaModule } from './experiencia/experiencia.module';
import { EstudioModule } from './estudio/estudio.module';
import { CambioEstadoModule } from './cambio-estado/cambio-estado.module';
import { EstadoModule } from './estado/estado.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { SectorModule } from './sector/sector.module';

@Module({
  imports: [UserModule, CompanyModule, OfertaEmpleoModule, SolicitudEmpleoModule, DireccionModule, FormularioCvModule, EmpleoOfrecidoModule, LocalidadModule, IdiomaModule, ExperienciaModule, EstudioModule, CambioEstadoModule, EstadoModule, ProvinciaModule, SectorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
