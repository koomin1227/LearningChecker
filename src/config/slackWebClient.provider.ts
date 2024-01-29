import { WebClient } from '@slack/web-api';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const SlackWebClientProvider = {
  provide: WebClient,
  import: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return new WebClient(configService.get('SLACK_TOKEN'));
  },
};
