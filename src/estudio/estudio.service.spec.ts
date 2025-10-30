import { Test, TestingModule } from '@nestjs/testing';
import { EstudioService } from './estudio.service';

describe('EstudioService', () => {
  let service: EstudioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudioService],
    }).compile();

    service = module.get<EstudioService>(EstudioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
