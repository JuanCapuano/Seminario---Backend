import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CambioEstadoService } from './cambio-estado.service';
import { CreateCambioEstadoDto } from './dto/create-cambio-estado.dto';
import { UpdateCambioEstadoDto } from './dto/update-cambio-estado.dto';

@Controller('cambio-estado')
export class CambioEstadoController {
  constructor(private readonly cambioEstadoService: CambioEstadoService) {}

  @Post()
  create(@Body() createCambioEstadoDto: CreateCambioEstadoDto) {
    return this.cambioEstadoService.create(createCambioEstadoDto);
  }

  @Get()
  findAll() {
    return this.cambioEstadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cambioEstadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCambioEstadoDto: UpdateCambioEstadoDto) {
    return this.cambioEstadoService.update(+id, updateCambioEstadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cambioEstadoService.remove(+id);
  }
}
