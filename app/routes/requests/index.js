import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RequestsIndexRoute extends Route {
  @service store;

  async model() {
    const requests = await this.store.findAll('cycling-request');

    return {
      requests,
    };
  }
}
