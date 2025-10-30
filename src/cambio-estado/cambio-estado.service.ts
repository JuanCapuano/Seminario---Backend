import { Injectable } from '@nestjs/common';
import { CreateCambioEstadoDto } from './dto/create-cambio-estado.dto';
import { UpdateCambioEstadoDto } from './dto/update-cambio-estado.dto';

@Injectable()
export class CambioEstadoService {
  create(createCambioEstadoDto: CreateCambioEstadoDto) {
    return 'This action adds a new cambioEstado';
  }

  findAll() {
    return `This action returns all cambioEstado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cambioEstado`;
  }

  update(id: number, updateCambioEstadoDto: UpdateCambioEstadoDto) {
    return `This action updates a #${id} cambioEstado`;
  }

  remove(id: number) {
    return `This action removes a #${id} cambioEstado`;
  }
}
