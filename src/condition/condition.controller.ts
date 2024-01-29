import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConditionService } from './condition.service';
import { ConditionDto } from './condition.dto';
import { AlarmService } from './alarm.service';

@Controller('condition')
export class ConditionController {
  constructor(
    private conditionService: ConditionService,
    private alarmService: AlarmService,
  ) {}
  @Get()
  conditionDetail() {
    return this.conditionService.getCondition();
  }

  @Post('/start')
  async conditionStart(@Body() body: ConditionDto) {
    this.conditionService.startLearning(body.name);
    await this.alarmService.sendStartMessage(body.name);
  }

  @Post('/end')
  async conditionEnd(@Body() body: ConditionDto) {
    this.conditionService.endLearning(body.name);
    await this.alarmService.sendEndMessage(body.name);
  }
}
