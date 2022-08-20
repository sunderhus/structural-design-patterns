import { Analytics } from '@/analytics/protocols';
import mixpanel from 'mixpanel-browser';

class MixPanelAnalyticsAdapter implements Analytics {
  constructor(private readonly token: string) { }

  save(type: string, data: string): void {
    const mixpanelClient = mixpanel.init(this.token, {
      debug: true
    }, 'MixPanelClient')

    mixpanelClient.track(type, {
      data
    });
  }
}

export default MixPanelAnalyticsAdapter;