import { forwardRef, Module } from '@nestjs/common';
import { LocalidadService } from './localidad.service';
import { LocalidadController } from './localidad.controller';
import { ProvinciaModule } from 'src/provincia/provincia.module';

@Module({
  imports:[
    forwardRef(()=>ProvinciaModule)
  ],
  controllers: [LocalidadController],
  providers: [LocalidadService],
  exports:[LocalidadService],
})
export class LocalidadModule {}
