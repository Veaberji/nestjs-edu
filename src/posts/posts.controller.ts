import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
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

  @Post()
  public createPost(@Body() post: CreatePostDto): CreatePostDto {
    return post;
  }

  @Put()
  public updatePost(): string {
    return 'updatePost';
  }

  @Patch()
  public patchPost(@Body() post: PatchPostDto): PatchPostDto {
    return post;
  }
}
