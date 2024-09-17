import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RequestsNewIdentityController extends Controller {
  nextStep = 'requests.new.route-description';

  @action
  onSubmit() {
    console.log('onSubmit', arguments);
    this.transitionToRoute(this.nextStep);
  }
}
