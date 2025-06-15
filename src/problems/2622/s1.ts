class TimeLimitedCache {
  public map: Map<
    number,
    {
      value: number;
      timerId: NodeJS.Timeout;
    }
  >;

  constructor() {
    this.map = new Map();
  }

  set(key: number, value: number, ms: number): boolean {
    const hasKey = this.map.has(key);
    if (hasKey) {
      const { timerId } = this.map.get(key);
      clearTimeout(timerId);
    }

    this.map.set(key, {
      value,
      timerId: setTimeout(() => {
        this.map.delete(key);
      }, ms),
    });

    return hasKey;
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    }

    const { value } = this.map.get(key);
    return value;
  }

  count(): number {
    return this.map.size;
  }
}
