import { forwardRef, Module } from '@nestjs/common';
import { FormularioCvService } from './formulario-cv.service';
import { FormularioCvController } from './formulario-cv.controller';
import { UserModule } from 'src/user/user.module';
import { EstudioModule } from 'src/estudio/estudio.module';
import { ExperienciaModule } from 'src/experiencia/experiencia.module';
import { IdiomaModule } from 'src/idioma/idioma.module';

@Module({
  imports:[
    forwardRef(()=>UserModule),
    EstudioModule,
    ExperienciaModule,
    IdiomaModule,
    
  ],
  controllers: [FormularioCvController],
  providers: [FormularioCvService],
  exports:[FormularioCvService],
})
export class FormularioCvModule {}
