export class ConditionRepository {
  private learner: string;
  private updateTime: Date;
  private elapseTime: number;
  constructor() {
    this.learner = null;
  }

  find() {
    return {
      learner: this.learner,
      updateTime: this.updateTime,
      elapseTime: this.elapseTime,
    };
  }

  update(name: string) {
    this.learner = name;
    this.updateTime = new Date();
    this.updateTime = null;
  }

  updateElapseTime(hour: number) {
    this.elapseTime = hour;
  }
}
