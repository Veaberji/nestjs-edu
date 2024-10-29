import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getUsers(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
  ) {
    return this.usersService.getAll(page, limit);
  }

  @Get('/:id')
  public getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getById(id);
  }

  @Post()
  public createUser(@Body() user: CreateUserDto): CreateUserDto {
    return user;
  }

  @Put()
  public updateUser(): string {
    return 'updateUser';
  }

  @Patch()
  public patchUser(@Body() user: PatchUserDto): PatchUserDto {
    return user;
  }
}
