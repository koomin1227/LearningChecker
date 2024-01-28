import { Module } from '@nestjs/common';
import { ConditionController } from './condition.controller';
import { ConditionService } from './condition.service';
import { MemberRepository } from './member.repository';
import { ConditionRepository } from './condition.repository';

@Module({
  controllers: [ConditionController],
  providers: [ConditionService, MemberRepository, ConditionRepository],
})
export class ConditionModule {}
