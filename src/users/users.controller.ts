import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'returns all users' })
  @ApiResponse({ status: 200, description: ' users are fetched successfully' })
  @ApiQuery({ name: 'page', type: 'number', required: false, example: 5 })
  @ApiQuery({ name: 'limit', type: 'number', required: false, example: 10 })
  public getUsers(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
  ) {
    return this.usersService.getAll(page, limit);
  }

  @Get('/:id')
  @ApiParam({ name: 'id', type: 'number', required: true, example: 2 })
  public getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getById(id);
  }

  @Post()
  public async createUser(@Body() user: CreateUserDto): Promise<User> {
    return await this.usersService.create(user);
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
