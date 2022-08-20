import { Log } from "../presentation/protocols/log";
import { Analytics } from "./protocols/analytics";

export class ScreenLog implements Log {

  constructor(private readonly analytics: Analytics) { }

  event(type: Log.Type, data: Log.Data): void {
    if (!data.data) {
      return;
    }

    this.analytics.save(type, data.data);
  }

}