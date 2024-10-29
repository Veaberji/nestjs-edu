import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(@Inject(forwardRef(() => UsersService)) private usersService: UsersService) {}
  public login(email: string, password: string, id: number) {
    const user = this.usersService.getById(id);
    return 'jwt token';
  }

  public isAuthenticated() {
    return true;
  }
}
