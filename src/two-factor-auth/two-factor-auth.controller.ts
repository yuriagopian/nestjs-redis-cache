import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
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
  async create(
    @Body() body: TwoFactorAuthSendTokenRequestDTO,
  ): Promise<TwoFactorAuthSendTokenResponseDTO> {
    return this.twoFactorAuthService.sendToken(body);
  }

  @Post('confirmToken')
  async confirmToken(
    @Body() body: TwoFactorAuthConfirmTokenRequestDTO,
  ): Promise<TwoFactorAuthConfirmTokenResponseDTO> {
    return this.twoFactorAuthService.confirmToken(body);
  }

  @Get()
  findAll() {
    return this.twoFactorAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.twoFactorAuthService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.twoFactorAuthService.remove(+id);
  }
}
