import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private usersService: UsersService) {}

  public getAll(page: number, limit: number) {
    return [
      { id: 1, authorId: 1, content: 'content 1' },
      { id: 2, authorId: 2, content: 'content 2' },
    ];
  }

  public getAllByAuthorId(id: number) {
    const author = this.usersService.getById(id);

    return [
      { id: 1, authorName: author.firstName, content: 'content 1' },
      { id: 2, authorName: author.firstName, content: 'content 2' },
    ];
  }

  public getById(id: number) {
    return { id, authorId: 1, content: 'some content' };
  }
}
