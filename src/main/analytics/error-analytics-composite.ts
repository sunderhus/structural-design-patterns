import { ErrorAnalytics } from "@/analytics/protocols/error-analytics";

export class ErrorAnalyticsComposite implements ErrorAnalytics {

  constructor(private readonly errorAnalytics: ErrorAnalytics[]) { }

  saveError(error: any): void {
    this.errorAnalytics.forEach(errorAnalytics => {
      errorAnalytics.saveError(error);
    })
  }

}