import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
  ): string {
    return `getUsers page: ${page}`;
  }

  @Get('/:id')
  public getUser(@Param('id', ParseIntPipe) id: number): string {
    return `User ${id}`;
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
