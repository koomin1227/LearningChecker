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

  async sendStartMessage(name: string) {
    const message = `${name} 님이 학습을 시작했습니다.`;
    await this.sendMessage(message);
  }

  async sendEndMessage(name: string) {
    const message = `${name} 님이 학습을 종료했습니다.`;
    await this.sendMessage(message);
  }
}
