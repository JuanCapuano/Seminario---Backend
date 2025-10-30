import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudEmpleoService } from './solicitud-empleo.service';

describe('SolicitudEmpleoService', () => {
  let service: SolicitudEmpleoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudEmpleoService],
    }).compile();

    service = module.get<SolicitudEmpleoService>(SolicitudEmpleoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
