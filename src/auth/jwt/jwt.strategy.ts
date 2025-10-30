import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Payload } from '../interfaces/payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // toma el token del header
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_AUTH_SECRET'),
    });
  }

  async validate(payload: Payload) {
    // Acá llega el payload si el token es válido
    if (!payload || !payload.email) {
      throw new UnauthorizedException('Token inválido');
    }

    // Podés devolver lo que quieras que quede en request.user
    return payload;
  }
}
