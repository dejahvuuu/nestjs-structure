import { Test, TestingModule } from '@nestjs/testing';
import { FiltroService } from './filtro.service';

describe('FiltroService', () => {
  let service: FiltroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiltroService],
    }).compile();

    service = module.get<FiltroService>(FiltroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
