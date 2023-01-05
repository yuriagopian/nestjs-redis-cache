import { PartialType } from '@nestjs/mapped-types';
import { TwoFactorAuthSendTokenRequestDTO } from './two-factor-auth-req.dto';

export class UpdateTodoDto extends PartialType(
  TwoFactorAuthSendTokenRequestDTO,
) {}
