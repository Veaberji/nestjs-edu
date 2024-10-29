import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(@Inject(forwardRef(() => AuthService)) private auth: AuthService) {}
  public getAll(page: number, limit: number) {
    const isAuth = this.auth.isAuthenticated();

    return [
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Alice', lastName: 'M' },
    ];
  }

  public getById(id: number) {
    return { id, firstName: 'John', lastName: 'Doe' };
  }
}
