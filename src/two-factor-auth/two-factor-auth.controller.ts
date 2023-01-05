import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TwoFactorAuthService } from './two-factor-auth.service';
import { TwoFactorAuthSendTokenRequestDTO } from './dto/req/two-factor-auth-req.dto';

@Controller('two-factor')
export class TwoFactorAuthController {
  constructor(private readonly twoFactorAuthService: TwoFactorAuthService) {}

  @Post('sendToken')
  async create(@Body() body: TwoFactorAuthSendTokenRequestDTO) {
    return this.twoFactorAuthService.sendToken(body);
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
