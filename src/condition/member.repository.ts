export class MemberRepository {
  private member: string[];
  constructor() {
    this.member = ['구민', '이광훈'];
  }

  findOne(name: string): string {
    if (!this.member.includes(name)) {
      return null;
    }
    return name;
  }

  add(name: string) {
    this.member.push(name);
  }
}
