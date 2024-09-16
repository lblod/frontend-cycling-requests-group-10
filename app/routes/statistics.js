import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class StatisticsRoute extends Route {
  @service session;
  @service currentSession;
  @service router;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model() {
    const response = await fetch('/example/types-count');
    if (!response.ok) {
      let error = new Error(response.statusText);
      error.status = response.status;
      throw error;
    }
    const result = await response.json();
    return result;
  }
}
