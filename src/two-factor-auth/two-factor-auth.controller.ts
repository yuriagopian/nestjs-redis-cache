import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import {
  TwoFactorAuthConfirmTokenResponseDTO,
  TwoFactorAuthSendTokenResponseDTO,
} from './dto/res/two-factor-auth.res.dto';
import { TwoFactorAuthService } from './two-factor-auth.service';
import {
  TwoFactorAuthSendTokenRequestDTO,
  TwoFactorAuthConfirmTokenRequestDTO,
} from './dto/req/two-factor-auth-req.dto';

@Controller('two-factor')
export class TwoFactorAuthController {
  constructor(private readonly twoFactorAuthService: TwoFactorAuthService) {}

  @Post('sendToken')
  @HttpCode(HttpStatus.OK)
  async create(
    @Body() body: TwoFactorAuthSendTokenRequestDTO,
  ): Promise<TwoFactorAuthSendTokenResponseDTO> {
    return this.twoFactorAuthService.sendToken(body);
  }

  @Post('confirmToken')
  @HttpCode(HttpStatus.OK)
  async confirmToken(
    @Body() body: TwoFactorAuthConfirmTokenRequestDTO,
  ): Promise<TwoFactorAuthConfirmTokenResponseDTO> {
    return this.twoFactorAuthService.confirmToken(body);
  }
}
