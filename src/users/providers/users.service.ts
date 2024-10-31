import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 * UsersService class
 */
@Injectable()
export class UsersService {
  /**
   * creates UsersService instance
   */
  constructor(
    @Inject(forwardRef(() => AuthService)) private auth: AuthService,
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

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

  /**
   * creates a new user
   */
  public async create(user: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }
}
