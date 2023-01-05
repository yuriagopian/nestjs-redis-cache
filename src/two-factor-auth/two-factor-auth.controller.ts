import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './two-factor-auth.service';
import { TwoFactorAuthSendTokenRequestDTO } from './dto/req/two-factor-auth-req.dto';

@Controller('two-factor')
export class TwoFactorAuthController {
  constructor(private readonly todoService: TodoService) {}

  @Post('sendToken')
  create(@Body() body: TwoFactorAuthSendTokenRequestDTO) {
    return this.todoService.sendToken(body);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
