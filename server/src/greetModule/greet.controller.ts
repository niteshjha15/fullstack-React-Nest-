import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { GreetService } from './greet.service';
import { Request, Response } from 'express';
import { Id } from './greet.types';

@Controller()
export class GreetController {
  GreetService: any;
  constructor(private readonly appService: GreetService) {}

  @Post('/add/greet')
  async createGreet(@Req() req: Request, @Res() response: Response) {
    const newGreet = await this.appService.create(req.body);
    return response.status(HttpStatus.CREATED).json({
      newGreet,
    });
  }

  @Get('/all/greet')
  async getAllGreet(@Res() response: Response) {
    const allGreets = await this.appService.getAllGreet();
    return response.status(HttpStatus.CREATED).json({
      allGreets,
    });
  }

  @Put('/:id')
  async updateGreet(
    @Res() response: Response,
    @Param('id') id: Id,
    @Req() req: Request,
  ) {
    const getUpdateGreet = await this.appService.updateGreet(id, req.body);
    return response.status(HttpStatus.CREATED).json({
      getUpdateGreet,
    });
  }

  @Delete('/:id')
  async deleteGreet(@Param('id') id: Id, @Res() response: Response) {
    const deletedGreet = await this.appService.deleteGreet(id);
    return response.status(HttpStatus.CREATED).json({
      deletedGreet,
    });
  }
}
