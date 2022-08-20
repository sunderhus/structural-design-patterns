import { Analytics } from "@/analytics/protocols/analytics";
import { ErrorAnalytics } from "@/analytics/protocols/error-analytics";

type Logs = {
  type: string,
  data: unknown,
}

class AznAnalyticsAdapter implements Analytics, ErrorAnalytics {

  constructor(private readonly logs: Logs[]) {
  }

  save(type: string, data: string): void {
    this.logs.push({ type, data });
  }

  saveError(error: any): void {
    this.logs.push({ type: 'error', data: error });
  }

}

export default AznAnalyticsAdapter;