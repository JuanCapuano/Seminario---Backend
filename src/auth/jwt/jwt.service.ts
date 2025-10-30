import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt'; 
import { ConfigService } from '@nestjs/config';
import dayjs from 'dayjs';
import { Payload } from '../interfaces/payload'

@Injectable()
export class JwtService {
  constructor(
    private nestJwtService: NestJwtService,
    private configService: ConfigService,
  ) {}

  // Genera el Access Token (usa la configuración ya cargada en el JwtModule)
  generateAccessToken(payload: Partial<Payload>): string {
    return this.nestJwtService.sign(payload);
  }

  // Genera el Refresh Token (usa configuración separada)
  generateRefreshToken(payload: Partial<Payload>): string {
    const secret = this.configService.get<string>('JWT_REFRESH_SECRET');
    const expiresIn = this.configService.get<string>('JWT_REFRESH_EXPIRES_IN');

    return this.nestJwtService.sign(payload, {
      secret,
      expiresIn,
    });
  }

  // Obtiene y verifica el Payload (usando el secreto adecuado)
  getPayload(token: string, type: 'refresh' | 'auth' = 'auth'): Payload {
    const secretKey =
      type === 'auth'
        ? this.configService.get<string>('JWT_AUTH_SECRET')
        : this.configService.get<string>('JWT_REFRESH_SECRET');

    try {
      return this.nestJwtService.verify(token, { secret: secretKey }) as Payload; 
    } catch (error) {
      throw new UnauthorizedException('Token inválido o expirado.');
    }
  }
  // Lógica de Refresh Token
  refreshToken(refreshToken: string): { accessToken: string, refreshToken: string } {
    try {
      const payload = this.getPayload(refreshToken, 'refresh');
      const timeToExpire = dayjs.unix(payload.exp).diff(dayjs(), 'minute');
      const newAccessToken = this.generateAccessToken({ email: payload.email });
      return {
        accessToken: newAccessToken,
        refreshToken: timeToExpire < 20
          ? this.generateRefreshToken({ email: payload.email })
          : refreshToken
      };
    } catch (error) {
      throw new UnauthorizedException('Refresh token inválido.');
    }
  }
}