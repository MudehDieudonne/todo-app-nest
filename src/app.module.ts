import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TodolistModule } from './todolist/todolist.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, TodolistModule],
})
export class AppModule {}
