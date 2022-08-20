import { Log } from "@/presentation/protocols";
import { ErrorAnalytics } from "@/analytics/protocols";

export class ErrorLog implements Log {
  constructor(private readonly errorAnalitycs: ErrorAnalytics) {
  }

  event(type: Log.Type, data: Log.Data): void {
    if (!data.error) {
      return;
    }
    this.errorAnalitycs.saveError(data.error);
  }
}

