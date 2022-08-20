import { ActionLog, ErrorLog, ScreenLog } from '@/analytics';
import MixPanelAnalyticsAdapter from '@/infra/mixpanel-analytics-adapter';
import LogStrategy from '@/presentation/protocols/log-strategy';
import { Home } from '@/presentation/pages/home'
import { ErrorAnalyticsBuilder, ErrorAnalyticsComposite } from '@/main/analytics';
import { makeMixPanelPersonalToken } from '@/main/factories/analytics/mixpanel-token-factory';

export const HomeFactory = () => {
  // adapters
  const mixpanelAnalytics = new MixPanelAnalyticsAdapter(makeMixPanelPersonalToken());

  // const aznAnalytics = new AznAnalyticsAdapter([]);
  // const datadogAnalytics = new DataDogAnalyticsAdapter();

  // Or using builders to chain all options 
  const analyticsErrors = ErrorAnalyticsBuilder.init().aznAnalytics().datadog().build();
  // with composite, is better :)
  const errorAnalyticsComposite = new ErrorAnalyticsComposite(analyticsErrors)
  // loggers
  const actionLog = new ActionLog(mixpanelAnalytics)
  const screenLog = new ScreenLog(mixpanelAnalytics)
  const errorLog = new ErrorLog(errorAnalyticsComposite)
  // stratey logger
  const logStrategy = new LogStrategy(actionLog, screenLog, errorLog);
  // Home with dependencies
  return new Home(logStrategy)
}