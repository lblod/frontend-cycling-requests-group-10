import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RequestsNewRouteDescriptionController extends Controller {
  nextStep = 'requests.new.extra-info';

  @action
  onSubmit() {
    console.log('onSubmit', arguments);
    console.log('Submitting form...');
    this.transitionToRoute(this.nextStep);
  }
}
