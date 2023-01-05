import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TwoFactorAuthSendTokenRequestDTO } from './dto/req/two-factor-auth-req.dto';
import { UpdateTodoDto } from './dto/req/update-todo.dto';

@Controller('two-factor')
export class TwoFactorAuthController {
  constructor(private readonly todoService: TodoService) {}

  @Post('sendToken')
  create(@Body() body: TwoFactorAuthSendTokenRequestDTO) {
    return this.todoService.create(body);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
