import { Module } from '@nestjs/common';
import { ConditionController } from './condition.controller';
import { ConditionService } from './condition.service';
import { MemberRepository } from './member.repository';
import { ConditionRepository } from './condition.repository';
import { AlarmService } from './alarm.service';
import { SlackWebClientProvider } from '../config/slackWebClient.provider';

@Module({
  controllers: [ConditionController],
  providers: [
    ConditionService,
    MemberRepository,
    ConditionRepository,
    AlarmService,
    SlackWebClientProvider,
  ],
})
export class ConditionModule {}
