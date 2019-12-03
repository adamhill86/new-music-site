export class EventEmitter {
  private events: Record<string, Function[]> = {};

  public dispatch(name: string, data: any) {
    if (this.events[name]) {
      this.events[name].forEach(callback => callback(data));
    }
  }

  public subscribe(name: string, callback: Function) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(callback);
  }
}
