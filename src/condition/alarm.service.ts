import { HttpException, Injectable } from '@nestjs/common';
import { WebClient } from '@slack/web-api';

@Injectable()
export class AlarmService {
  constructor(private client: WebClient) {}

  async sendMessage(channelId: string, message: string) {
    try {
      await this.client.chat.postMessage({
        channel: channelId,
        text: message,
      });
    } catch (e) {
      throw new HttpException('slack not work', 500);
    }
  }
}
