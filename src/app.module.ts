import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, TodoModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
