export class ConditionRepository {
  private learner: string;
  private updateTime: Date;
  constructor() {
    this.learner = null;
  }

  find() {
    return { learner: this.learner, updateTime: this.updateTime };
  }

  update(name: string) {
    this.learner = name;
    this.updateTime = new Date();
  }
}
