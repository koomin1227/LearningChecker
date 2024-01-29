import { HttpException, Injectable } from '@nestjs/common';
import { WebClient } from '@slack/web-api';

@Injectable()
export class AlarmService {
  // private client: WebClient;
  constructor(private client: WebClient) {
    this.client = new WebClient('token');
  }

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
