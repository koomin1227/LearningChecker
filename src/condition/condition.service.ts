import { Injectable } from '@nestjs/common';
import { ConditionRepository } from './condition.repository';

@Injectable()
export class ConditionService {
  constructor(private conditionRepository: ConditionRepository) {}

  getCondition() {
    const condition = this.conditionRepository.find();
    return { condition };
  }
}
