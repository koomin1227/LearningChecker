import { WebClient } from '@slack/web-api';

export const SlackWebClientProvider = {
  provide: WebClient,
  useFactory: () => {
    return new WebClient('test');
  },
};
