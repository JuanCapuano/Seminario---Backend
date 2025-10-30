import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudEmpleoController } from './solicitud-empleo.controller';
import { SolicitudEmpleoService } from './solicitud-empleo.service';

describe('SolicitudEmpleoController', () => {
  let controller: SolicitudEmpleoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudEmpleoController],
      providers: [SolicitudEmpleoService],
    }).compile();

    controller = module.get<SolicitudEmpleoController>(SolicitudEmpleoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
