import { ErrorAnalytics } from "@/analytics/protocols/error-analytics";

class DataDogAnalyticsAdapter implements ErrorAnalytics {

  saveError(error: any): void {
    console.log(error);
  }

}

export default DataDogAnalyticsAdapter;