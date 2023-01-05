import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/req/two-factor-auth-req.dto';
import { UpdateTodoDto } from './dto/req/update-todo.dto';
import { Cache } from 'cache-manager';

@Injectable()
export class TodoService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
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

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
