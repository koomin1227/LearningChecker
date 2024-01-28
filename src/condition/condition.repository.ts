export class ConditionRepository {
  private member: string[];
  private condition: string;
  constructor() {
    this.member = ['구민', '이광훈'];
    this.condition = null;
  }

  getCondition() {
    return this.condition;
  }

  setCondition(name: string) {
    this.condition = name;
  }
}
