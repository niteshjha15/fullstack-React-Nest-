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
  UseGuards,
} from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt.guards';

const KEY = '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';

@Controller('/askAi')
export class ChatController {
  @UseGuards(JwtAuthGuard)
  @Post('/topic')
  async getAllGreet(@Req() req: Request, @Res() response: Response) {
    const configuration = new Configuration({
      apiKey: KEY,
    });
    const openai = new OpenAIApi(configuration);
    const { prompt } = req.body;
    const res = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    if (res?.data?.choices) {
      const result = res?.data?.choices;
      return response.status(HttpStatus.CREATED).json({
        result,
      });
    }
  }
}
