import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  public getPosts(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
  ) {
    return this.postsService.getAll(page, limit);
  }

  @Get('/:id')
  public getPost(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.getById(id);
  }

  @Get('byAuthor/:id')
  public getPostsByAuthorId(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.getAllByAuthorId(id);
  }

  @ApiOperation({ summary: 'creates a new post' })
  @ApiResponse({ status: 200, description: 'post is created successfully' })
  @Post()
  public createPost(@Body() post: CreatePostDto): CreatePostDto {
    return post;
  }

  @Put()
  public updatePost(): string {
    return 'updatePost';
  }

  @ApiOperation({ summary: 'updates a post' })
  @ApiResponse({ status: 200, description: 'post is updated successfully' })
  @Patch()
  public patchPost(@Body() post: PatchPostDto): PatchPostDto {
    return post;
  }
}
