import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/providers/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'admin1234!!!',
        database: 'nestjs',
        entities: [User],
        synchronize: true,
      }),
    }),
    UsersModule,
    PostsModule,
    AuthModule,
  ],
  providers: [AppService, AuthService],
})
export class AppModule {}
