import { forwardRef, Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { DireccionModule } from 'src/direccion/direccion.module';
import { RoleModule } from 'src/auth/role/role.module';
import { OfertaEmpleoModule } from 'src/oferta-empleo/oferta-empleo.module';

@Module({
  imports:[
    forwardRef(()=>DireccionModule),
    forwardRef(()=>RoleModule),
    forwardRef(()=>OfertaEmpleoModule),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports:[CompanyService],

})
export class CompanyModule {}
