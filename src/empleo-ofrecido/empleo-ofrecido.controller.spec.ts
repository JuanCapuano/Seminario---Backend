import { Test, TestingModule } from '@nestjs/testing';
import { EmpleoOfrecidoController } from './empleo-ofrecido.controller';
import { EmpleoOfrecidoService } from './empleo-ofrecido.service';

describe('EmpleoOfrecidoController', () => {
  let controller: EmpleoOfrecidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpleoOfrecidoController],
      providers: [EmpleoOfrecidoService],
    }).compile();

    controller = module.get<EmpleoOfrecidoController>(EmpleoOfrecidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
