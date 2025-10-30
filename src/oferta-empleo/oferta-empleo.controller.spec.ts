import { Test, TestingModule } from '@nestjs/testing';
import { OfertaEmpleoController } from './oferta-empleo.controller';
import { OfertaEmpleoService } from './oferta-empleo.service';

describe('OfertaEmpleoController', () => {
  let controller: OfertaEmpleoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfertaEmpleoController],
      providers: [OfertaEmpleoService],
    }).compile();

    controller = module.get<OfertaEmpleoController>(OfertaEmpleoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
