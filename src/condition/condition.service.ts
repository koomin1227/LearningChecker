import { HttpException, Injectable } from '@nestjs/common';
import { ConditionRepository } from './condition.repository';
import { MemberRepository } from './member.repository';
import { NotFoundError } from 'rxjs';

interface Condition {
  condition: string;
}

@Injectable()
export class ConditionService {
  constructor(
    private conditionRepository: ConditionRepository,
    private memberRepository: MemberRepository,
  ) {}

  getCondition(): Condition {
    const condition = this.conditionRepository.find();
    return { condition };
  }

  startLearning(name: string) {
    if (!this.memberRepository.findOne(name)) {
      throw new NotFoundError('not exist');
    }
    const condition = this.conditionRepository.find();
    if (condition == name) {
      throw new HttpException('1', 400); // 본인이 학습중인데 시작
    }
    if (condition != null) {
      throw new HttpException('2', 400); // 다른 사람이 학습중
    }
    this.conditionRepository.update(name);
  }

  endLearning(name: string) {
    if (!this.memberRepository.findOne(name)) {
      throw new NotFoundError('not exist');
    }
    const condition = this.conditionRepository.find();
    if (condition != name) {
      throw new HttpException('3', 400); // 본인이 학습중이지 않은데 종료
    }
    this.conditionRepository.update(null);
  }
}
