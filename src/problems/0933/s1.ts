// queue

class RecentCounter {
  public q: number[];

  constructor() {
    this.q = [];
  }

  ping(t: number): number {
    this.q.push(t);

    while (this.q.length > 0 && this.q[0] < t - 3000) {
      this.q.shift();
    }
    return this.q.length;
  }
}
