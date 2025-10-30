import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtService } from './jwt.service';
import { CompanyModule } from 'src/company/company.module';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Module({
  imports: [
    ConfigModule, 
    // Registra la estrategia por defecto para evitar repetir 'jwt' en @UseGuards
    PassportModule.register({ defaultStrategy: 'jwt' }), 
    
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_AUTH_SECRET'), 
        signOptions: {
          expiresIn: configService.get<string>('JWT_AUTH_EXPIRES_IN') || '15m',
        },
      }),
      inject: [ConfigService],
    }),
    UserModule, 
    CompanyModule
  ],
  providers: [
    // La estrategia de autenticación de Passport
    JwtStrategy,
    // Tu servicio personalizado de lógica de tokens (Refresh)
    JwtService,
    // Los Guards que usarás en los controladores
    AuthGuard,
  ],
  // Exporta lo necesario para que otros módulos lo usen
  exports: [JwtService, JwtModule, AuthGuard], 
})
export class AuthModule {}