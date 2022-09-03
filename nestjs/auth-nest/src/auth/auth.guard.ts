import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('~~~ [LocalAuthGuard] canActive -- 1');
    const activeResult = await super.canActivate(context);
    console.log(
      '~~~ [LocalAuthGuard] canActive -- 2 , activeResult: ',
      activeResult,
    );

    return Boolean(activeResult);
  }

  handleRequest(err, user, info) {
    console.log('~~~ [LocalAuthGuard] handleRequest: ', user);
    return user;
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
