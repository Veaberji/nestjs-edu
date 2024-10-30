import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/providers/auth.service';

@Module({
  imports: [UsersModule, PostsModule, AuthModule],
  providers: [AppService, AuthService],
})
export class AppModule {}
