import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './two-factor-auth-req.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
