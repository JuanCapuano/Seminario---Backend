import { Test, TestingModule } from '@nestjs/testing';
import { EmpleoOfrecidoService } from './empleo-ofrecido.service';

describe('EmpleoOfrecidoService', () => {
  let service: EmpleoOfrecidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpleoOfrecidoService],
    }).compile();

    service = module.get<EmpleoOfrecidoService>(EmpleoOfrecidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
