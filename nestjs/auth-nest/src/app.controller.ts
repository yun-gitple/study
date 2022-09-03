import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { CurrentUser, ReqUserLog } from './auth/auth.decorator';
import { JwtAuthGuard, LocalAuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get('hello')
  getHello() {
    return 'Hello Word1';
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   console.log('~~~ [AppController] login, req: ', req.user);
  //   return req.user;
  // }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @CurrentUser() user: any) {
    console.log('~~~ login: user, ', user);
    return this.authService.createJWT(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req, @CurrentUser() user: any, @ReqUserLog() log: any) {
    console.log('~~~ profile: user, ', user);
    return req.user;
  }
}
