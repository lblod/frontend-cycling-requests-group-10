import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RequestsRequestRoute extends Route {
  @service store;

  async model(params) {
    return await this.store.findRecord('cycling-request', params.request_id);
  }
}
