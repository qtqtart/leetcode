type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private events: Map<string, Set<Callback>>;

  constructor() {
    this.events = new Map();
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }

    const callbacks = this.events.get(eventName);
    callbacks.add(callback);

    return {
      unsubscribe: () => {
        this.events.get(eventName).delete(callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (!this.events.get(eventName)) {
      return [];
    }

    const callbacks = this.events.get(eventName);
    const ans: any[] = [];
    for (const callback of callbacks) {
      ans.push(callback(...args));
    }
    return ans;
  }
}
