import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { TwoFactorAuthSendTokenRequestDTO } from './dto/req/two-factor-auth-req.dto';
import { Cache } from 'cache-manager';
import { generateVerificationId } from './helpers/generate-verification-code.helper';

@Injectable()
export class TwoFactorAuthService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async sendToken(body: TwoFactorAuthSendTokenRequestDTO) {
    const { cellphoneNumber } = body;

    const verificationCode = await this.cacheManager.get(cellphoneNumber);
    const verificationCodeExists = !!verificationCode;

    if (!verificationCodeExists) {
      const verificationCode = generateVerificationId();
      await this.cacheManager.set(cellphoneNumber, verificationCode);
      return verificationCode;
    }

    console.log(verificationCode);

    return verificationCode;
  }

  async findAll() {
    const todos = await this.cacheManager.get('todos');

    if (todos) {
      // this returns a cached version of todos
      return {
        message: 'Cached Todos',
        data: todos,
      };
    }

    //your todo logic goes here
    const freshTodos = [1];

    // cache todos in redis
    await this.cacheManager.set('todos', freshTodos);

    return {
      message: 'Fresh todos',
      data: todos,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
