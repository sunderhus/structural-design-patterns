import { Log } from "@/presentation/protocols";
import { Analytics } from "@/analytics/protocols/analytics";

export class ActionLog implements Log {
  constructor(private readonly analytics: Analytics) { }

  event(type: Log.Type, data: Log.Data): void {
    if (!data.data) {
      return;
    }

    this.analytics.save(type, data.data);
  }

}