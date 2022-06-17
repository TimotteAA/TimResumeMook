class EventEmitter {
  private obj: Record<string, Function[]> = {};

  public on(event: string, callback: Function) {
    if (!this.obj[event]) {
      this.obj[event] = [];
    }
    this.obj[event].push(callback);
  }

  public send(event: string, ...args: any[]) {
    if (this.obj[event]) {
      this.obj[event].forEach((f) => f(...args));
    }
  }

  public off(event: string) {
    if (this.obj[event]) {
      // this.obj[event] = this.obj[event].filter((f) => f !== callback);
      delete this.obj[event];
    }
  }
}

export default new EventEmitter();
