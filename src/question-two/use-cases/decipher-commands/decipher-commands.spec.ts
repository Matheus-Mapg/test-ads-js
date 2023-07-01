import { Test, TestingModule } from '@nestjs/testing';
import { readFile, unlink, writeFile } from 'fs/promises';
import { cwd } from 'process';
import { MulterFile } from 'src/question-two/data/types/multer-file/multer-file.type';
import { DecipherCommandsUseCase } from './decipher-commands.usecase';

describe('DecipherCommands', () => {
  let provider: DecipherCommandsUseCase;
  let contentTxt = `25

52

53

202

54

402

203

510

201
  `

  let file: MulterFile

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecipherCommandsUseCase],
    }).compile();

    provider = module.get<DecipherCommandsUseCase>(DecipherCommandsUseCase);

    await writeFile(`${cwd()}/commands.txt`, contentTxt)

    file = {
      destination: '',
      buffer: await readFile(`${cwd()}/commands.txt`),
      encoding: '',
      originalname: 'commands.txt',
      fieldname: 'file',
      filename: '',
      mimetype: '',
      path: '',
      size: 123
    }
  });

  afterEach(async () => {
    try {
      var read = await readFile(`${cwd()}/commands.txt`)

    } catch (error) {

    }

    read && (await unlink(`${cwd()}/commands.txt`))
  })

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('Extrair comandos do arquivo txt', async () => {
    const result = await provider.extractCommands(file)

    expect(result).toHaveLength(9)
  })

  it('Executar comandos para obter o endereço de número 3', async () => {

    const commands = ['25', '52', '53', '202', '54', '402', '203', '510', '201']

    const result = await provider.executeCommands(commands)

    expect(result).toEqual(3)
  })

});
