import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequestsNewIdentityController extends Controller {
  @service store;

  nextStep = 'requests.new.route-description';

  @action
  async onSubmit({instanceId}) {
    this.model.cyclingRequest = await this.store.findRecord('cycling-request', instanceId);
    console.log('onSubmit', arguments);
    console.log('this.model.cycleRequest', this.model.cyclingRequest);
    this.transitionToRoute(this.nextStep);
  }
}
