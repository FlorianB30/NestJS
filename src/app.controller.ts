import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { CounterMiddleware } from './counter.middleware';
import { PostService } from './post/post.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private userService: UserService,
    private postService: PostService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:name')
  getHelloName(@Param('name') name: string): string {
    return this.appService.getHelloName(name);
  }

  @Post('hello')
  getHelloBody(@Body() body: any): string {
    return this.appService.getHelloBody(body);
  }

  @Get('user')
  getUser(): ReturnType<UserService['getUser']> {
    return this.userService.getUser();
  }

  @Get('user/name') 
  getName() : ReturnType<UserService['getName']> {
    return this.userService.getName();
  }

  @Get('user/years') 
  getYears() : ReturnType<UserService['getYears']> {
    return this.userService.getYears();
  }

  @Get('post')
  getPost() : ReturnType<PostService['getPost']> {
    return this.postService.getPost();
  }

  @Get('counter')
  getCounter(): string {
    return `Total Counter: ${CounterMiddleware.getCounter()}`;
  }
}
