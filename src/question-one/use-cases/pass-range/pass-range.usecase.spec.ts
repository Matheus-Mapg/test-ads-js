import { Test, TestingModule } from '@nestjs/testing';
import { PassRangeTest } from './pass-range.test';

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

  it('Separação dos dígitos', async () => {

    const pass = 12345678

    const result = await provider.separetedDigits(pass)

    expect(result).toHaveLength(8)

  })

  it('Verificação de continuidade dos dígitos, situações verdadeiras', async () => {

    const pass = ['1', '2', '3', '4', '6', '7', '8']
    const pass2 = ['1', '2', '2', '4', '4', '7', '8']
    const pass3 = ['1', '1', '1', '1', '1', '1', '1']

    const result = await provider.isContinuousTest(pass)
    const result2 = await provider.isContinuousTest(pass2)
    const result3 = await provider.isContinuousTest(pass3)

    expect(result).toBeTruthy()
    expect(result2).toBeTruthy()
    expect(result3).toBeTruthy()

  })

  it('Verificação de continuidade dos dígitos, situações falsas', async () => {

    const pass = ['1', '0', '3', '1', '8', '7', '8']
    const pass2 = ['1', '9', '9', '9', '9', '9', '8']
    const pass3 = ['2', '2', '2', '2', '2', '1', '1']

    const result = await provider.isContinuousTest(pass)
    const result2 = await provider.isContinuousTest(pass2)
    const result3 = await provider.isContinuousTest(pass3)

    expect(result).toBeFalsy()
    expect(result2).toBeFalsy()
    expect(result3).toBeFalsy()

  })

  it('Verificação de Adjacência dos dígitos, situações verdadeiras', async () => {
    const pass = ['1', '1', '2', '2', '3', '3', '8']
    const pass2 = ['1', '2', '2', '4', '4', '7', '8']
    const pass3 = ['1', '1', '1', '1', '1', '1', '1']

    const result = await provider.isAdjacentEqualTest(pass)
    const result2 = await provider.isAdjacentEqualTest(pass2)
    const result3 = await provider.isAdjacentEqualTest(pass3)

    expect(result).toBeTruthy()
    expect(result2).toBeTruthy()
    expect(result3).toBeTruthy()
  })

  it('Verificação de Adjacência dos dígitos, situações falsas', async () => {

    const pass = ['1', '2', '3', '4', '6', '7', '8']
    const pass2 = ['1', '8', '7', '4', '7', '2', '1']
    const pass3 = ['7', '6', '9', '6', '5', '4', '3']

    const result = await provider.isAdjacentEqualTest(pass)
    const result2 = await provider.isAdjacentEqualTest(pass2)
    const result3 = await provider.isAdjacentEqualTest(pass3)

    expect(result).toBeFalsy()
    expect(result2).toBeFalsy()
    expect(result3).toBeFalsy()

  })

  test.todo('Verificação de par de Adjacência dos dígitos')
  test.todo('Validação das senhas que devem passar')
  test.todo('Validações falsas')
});
