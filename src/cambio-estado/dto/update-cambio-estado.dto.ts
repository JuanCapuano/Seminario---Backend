import { PartialType } from '@nestjs/mapped-types';
import { CreateCambioEstadoDto } from './create-cambio-estado.dto';

export class UpdateCambioEstadoDto extends PartialType(CreateCambioEstadoDto) {}
