import { forwardRef, Module } from '@nestjs/common';
import { DireccionService } from './direccion.service';
import { DireccionController } from './direccion.controller';
import { LocalidadModule } from 'src/localidad/localidad.module';
import { UserModule } from 'src/user/user.module';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports:[
    forwardRef(()=>LocalidadModule),
    forwardRef(()=>UserModule),
    forwardRef(()=>CompanyModule),
  ],
  controllers: [DireccionController],
  providers: [DireccionService],
  exports:[DireccionService],
})
export class DireccionModule {}
