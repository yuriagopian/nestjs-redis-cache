import { Module } from '@nestjs/common';
import { TodoService } from './two-factor-auth.service';
import { TwoFactorAuthController } from './two-factor-auth.controller';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';

@Module({
  imports: [RedisCacheModule],
  controllers: [TwoFactorAuthController],
  providers: [TodoService],
})
export class TodoModule {}
