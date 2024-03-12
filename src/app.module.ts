import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostService } from './post/post.service';
import { LoggerMiddleware } from './logger.middleware';
import { CounterMiddleware } from './counter.middleware';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService, PostService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user');
    consumer.apply(CounterMiddleware).forRoutes('post');
    consumer.apply(CounterMiddleware).forRoutes('counter');
  }
}
