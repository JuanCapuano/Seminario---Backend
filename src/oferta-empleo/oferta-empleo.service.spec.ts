import { Test, TestingModule } from '@nestjs/testing';
import { OfertaEmpleoService } from './oferta-empleo.service';

describe('OfertaEmpleoService', () => {
  let service: OfertaEmpleoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfertaEmpleoService],
    }).compile();

    service = module.get<OfertaEmpleoService>(OfertaEmpleoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
