import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalRulesTest } from './additional-rules.mock';
import { PassRangeTest } from './pass-range.mock';

describe('PassRangeUsecase', () => {
  let provider: PassRangeTest;
  let providerAdditional: AdditionalRulesTest;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassRangeTest, AdditionalRulesTest],
    }).compile();

    provider = module.get<PassRangeTest>(PassRangeTest);
    providerAdditional = module.get<AdditionalRulesTest>(AdditionalRulesTest);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  })

  it('Separação dos dígitos', async () => {

    const pass = 123456

    const result = await provider.separetedDigits(pass)

    expect(result).toHaveLength(6)

  })

  it('Verificação de continuidade dos dígitos, situações verdadeiras', async () => {

    const pass = ['1', '2', '3', '4', '6', '7']
    const pass2 = ['1', '2', '2', '4', '4', '7']
    const pass3 = ['1', '1', '1', '1', '1', '1']

    const result = await provider.isContinuousTest(pass)
    const result2 = await provider.isContinuousTest(pass2)
    const result3 = await provider.isContinuousTest(pass3)

    expect(result).toBeTruthy()
    expect(result2).toBeTruthy()
    expect(result3).toBeTruthy()

  })

  it('Verificação de continuidade dos dígitos, situações falsas', async () => {

    const pass = ['1', '0', '3', '1', '8', '7']
    const pass2 = ['9', '9', '9', '9', '9', '1']
    const pass3 = ['2', '2', '2', '2', '2', '1']

    const result = await provider.isContinuousTest(pass)
    const result2 = await provider.isContinuousTest(pass2)
    const result3 = await provider.isContinuousTest(pass3)

    expect(result).toBeFalsy()
    expect(result2).toBeFalsy()
    expect(result3).toBeFalsy()

  })

  it('Verificação de Adjacência dos dígitos, situações verdadeiras', async () => {
    const pass = ['1', '1', '2', '2', '3', '3']
    const pass2 = ['1', '2', '2', '4', '4', '7']
    const pass3 = ['1', '1', '1', '1', '1', '1']

    const result = await provider.isAdjacentEqualTest(pass)
    const result2 = await provider.isAdjacentEqualTest(pass2)
    const result3 = await provider.isAdjacentEqualTest(pass3)

    expect(result).toBeTruthy()
    expect(result2).toBeTruthy()
    expect(result3).toBeTruthy()
  })

  it('Verificação de Adjacência dos dígitos, situações falsas', async () => {

    const pass = ['1', '2', '3', '4', '6', '7']
    const pass2 = ['1', '8', '7', '4', '7', '2']
    const pass3 = ['7', '6', '9', '6', '5', '4']

    const result = await provider.isAdjacentEqualTest(pass)
    const result2 = await provider.isAdjacentEqualTest(pass2)
    const result3 = await provider.isAdjacentEqualTest(pass3)

    expect(result).toBeFalsy()
    expect(result2).toBeFalsy()
    expect(result3).toBeFalsy()

  })

  it('Verificação de par de Adjacência dos dígitos, situações verdadeiras', async () => {
    const pass = ['1', '1', '2', '2', '3', '3']
    const pass2 = ['1', '2', '2', '4', '5', '7']
    const pass3 = ['1', '1', '2', '2', '3', '3']

    const result = await providerAdditional.isAdjacentEqualTest(pass)
    const result2 = await providerAdditional.isAdjacentEqualTest(pass2)
    const result3 = await providerAdditional.isAdjacentEqualTest(pass3)

    expect(result).toBeTruthy()
    expect(result2).toBeTruthy()
    expect(result3).toBeTruthy()
  })

  it('Verificação de par de Adjacência dos dígitos, situações falsas', async () => {
    const pass = ['1', '1', '1', '2', '3', '4']
    const pass2 = ['1', '2', '3', '4', '5', '7']

    const result = await providerAdditional.isAdjacentEqualTest(pass)
    const result2 = await providerAdditional.isAdjacentEqualTest(pass2)

    expect(result).toBeFalsy()
    expect(result2).toBeFalsy()
  })

  it('Validação das senhas que devem passar', async () => {
    const existsPass = []
    const existsPassAdditional = []

    for (let pass = 184759; pass <= 856920; pass++) {

      const digits = await provider.separetedDigits(pass)

      const digitsAdditional = await providerAdditional.separetedDigits(pass)

      const isValid = await provider.validatePassword(digits)

      const isValidAdditional = await providerAdditional.validatePassword(digitsAdditional)

      isValid && (existsPass.push(pass))

      isValidAdditional && (existsPassAdditional.push(pass))

    }

    expect(existsPass).toHaveLength(1687)
    expect(existsPassAdditional).toHaveLength(1098)
  })


  it('Validação das senhas que não devem passar', async () => {

    const existsPass = []
    const existsPassAdditional = []

    for (let pass = 184759; pass <= 856920; pass++) {

      const digits = await provider.separetedDigits(pass)

      const digitsAdditional = await providerAdditional.separetedDigits(pass)

      const isValid = await provider.validatePassword(digits)

      const isValidAdditional = await providerAdditional.validatePassword(digitsAdditional)

      !isValid && (existsPass.push(pass))

      !isValidAdditional && (existsPassAdditional.push(pass))

    }

    expect(existsPass).toHaveLength(670475)
    expect(existsPassAdditional).toHaveLength(671064)

  })
});
