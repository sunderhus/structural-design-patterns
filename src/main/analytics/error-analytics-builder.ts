import { ErrorAnalytics } from "@/analytics/protocols/error-analytics";
import AznAnalyticsAdapter from "@/infra/azn-analitycs-adapter";
import DataDogAnalyticsAdapter from "@/infra/datadog-analytics-adapter";

export class ErrorAnalyticsBuilder {

  private constructor(private readonly errorAnalytics: ErrorAnalytics[]) { }

  static init() {
    return new ErrorAnalyticsBuilder([])
  }

  aznAnalytics() {
    this.errorAnalytics.push(new AznAnalyticsAdapter([]))
    return this;
  }

  datadog() {
    this.errorAnalytics.push(new DataDogAnalyticsAdapter())
    return this;
  }


  build(): ErrorAnalytics[] {
    return this.errorAnalytics;
  }

}