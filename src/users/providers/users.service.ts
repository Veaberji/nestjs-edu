import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * UsersService class
 */
@Injectable()
export class UsersService {
  /**
   * creates UsersService instance
   */
  constructor(@Inject(forwardRef(() => AuthService)) private auth: AuthService) {}

  /**
   * returns all users
   */
  public getAll(page: number, limit: number) {
    if (!this.auth.isAuthenticated()) {
      throw new Error('is not Authenticated');
    }

    return [
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Alice', lastName: 'M' },
    ];
  }

  /**
   * returns user by Id
   */
  public getById(id: number) {
    return { id, firstName: 'John', lastName: 'Doe' };
  }
}
