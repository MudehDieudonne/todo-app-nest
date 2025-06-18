import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log({ dto });

    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    this.authService.sigin();
  }
}
