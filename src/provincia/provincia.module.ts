import { forwardRef, Module } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { ProvinciaController } from './provincia.controller';
import { LocalidadModule } from 'src/localidad/localidad.module';

@Module({
  imports:[
    forwardRef(()=>LocalidadModule)
  ],
  controllers: [ProvinciaController],
  providers: [ProvinciaService],
  exports:[ProvinciaService],
})
export class ProvinciaModule {}
