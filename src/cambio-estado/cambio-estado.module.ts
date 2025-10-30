import { Module } from '@nestjs/common';
import { CambioEstadoService } from './cambio-estado.service';
import { CambioEstadoController } from './cambio-estado.controller';

@Module({
  controllers: [CambioEstadoController],
  providers: [CambioEstadoService],
})
export class CambioEstadoModule {}
