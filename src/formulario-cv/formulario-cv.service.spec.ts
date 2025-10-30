import { Test, TestingModule } from '@nestjs/testing';
import { FormularioCvService } from './formulario-cv.service';

describe('FormularioCvService', () => {
  let service: FormularioCvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormularioCvService],
    }).compile();

    service = module.get<FormularioCvService>(FormularioCvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
