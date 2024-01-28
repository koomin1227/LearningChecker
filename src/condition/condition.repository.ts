export class ConditionRepository {
  private condition: string;
  constructor() {
    this.condition = null;
  }

  find() {
    return this.condition;
  }

  update(name: string) {
    this.condition = name;
  }
}
