import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log({ dto });

    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    this.authService.sigin();
  }
}
