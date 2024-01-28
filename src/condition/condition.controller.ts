import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConditionService } from './condition.service';
import { ConditionDto } from './condition.dto';

@Controller('condition')
export class ConditionController {
  constructor(private conditionService: ConditionService) {}
  @Get()
  conditionDetail() {
    return this.conditionService.getCondition();
  }

  @Post('/start')
  conditionStart(@Body() body: ConditionDto) {
    this.conditionService.startLearning(body.name);
  }

  @Post('/end')
  conditionEnd(@Body() body: ConditionDto) {
    this.conditionService.endLearning(body.name);
  }
}
