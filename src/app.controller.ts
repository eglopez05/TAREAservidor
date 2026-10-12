
import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('users/:id')
  getuser(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getuser(id);
  }

  @Post('users')
  crear() {
    return this.appService.crear();
  }

  @Put('users/:id')
  putunuser(@Param('id', ParseIntPipe) id: number) {
    return this.appService.putunuser(id);
  }

  @Patch('users/:id')
  patchuser(@Param('id', ParseIntPipe) id: number) {
    return this.appService.patchuser(id);
  }

  @Delete('users/:id')
  deleteuser(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteuser(id);
  }
}