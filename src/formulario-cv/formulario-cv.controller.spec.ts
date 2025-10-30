import { Test, TestingModule } from '@nestjs/testing';
import { FormularioCvController } from './formulario-cv.controller';
import { FormularioCvService } from './formulario-cv.service';

describe('FormularioCvController', () => {
  let controller: FormularioCvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormularioCvController],
      providers: [FormularioCvService],
    }).compile();

    controller = module.get<FormularioCvController>(FormularioCvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
