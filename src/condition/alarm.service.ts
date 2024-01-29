import { HttpException, Injectable } from '@nestjs/common';
import { WebClient } from '@slack/web-api';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AlarmService {
  constructor(
    private client: WebClient,
    private configService: ConfigService,
  ) {}

  async sendMessage(message: string) {
    try {
      await this.client.chat.postMessage({
        channel: this.configService.get('CHANNEL_ID'),
        text: message,
      });
    } catch (e) {
      throw new HttpException('slack not work', 500);
    }
  }
}
