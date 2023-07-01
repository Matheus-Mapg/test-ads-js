import { Test, TestingModule } from '@nestjs/testing';
import { PassRangeTest } from '../pass-range.test';

describe('PassRangeUsecase', () => {
  let provider: PassRangeTest;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassRangeTest],
    }).compile();

    provider = module.get<PassRangeTest>(PassRangeTest);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  })

  test.todo('Separação dos dígitos')
  test.todo('Verificação de continuidade dos dígitos')
  test.todo('Verificação de Adjacência dos dígitos')
  test.todo('Validação das senhas que devem passar')
  test.todo('Verificação de par de Adjacência dos dígitos')
});
