import { Test, TestingModule } from '@nestjs/testing';
import { EstudioController } from './estudio.controller';
import { EstudioService } from './estudio.service';

describe('EstudioController', () => {
  let controller: EstudioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudioController],
      providers: [EstudioService],
    }).compile();

    controller = module.get<EstudioController>(EstudioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
