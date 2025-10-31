import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { entities } from './index';
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
import { JwtModule } from './auth/jwt/jwt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        schema: configService.get<string>('DB_SCHEMA'),
        entities,
        synchronize: true,
        logging: true,
      }),
    }),

    JwtModule,
    UserModule,
    CompanyModule,
    OfertaEmpleoModule,
    SolicitudEmpleoModule,
    DireccionModule,
    FormularioCvModule,
    EmpleoOfrecidoModule,
    LocalidadModule,
    IdiomaModule,
    ExperienciaModule,
    EstudioModule,
    CambioEstadoModule,
    EstadoModule,
    ProvinciaModule,
    SectorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
