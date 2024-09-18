import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RequestsNewRouteDescriptionController extends Controller {
  nextStep = 'requests.new.extra-info';
  prevStep = 'requests.new.identity';

  @action
  onNext() {
    console.log('onNext', arguments);
    this.transitionToRoute(this.nextStep);
  }

  @action
  onBack() {
    console.log('onBack', arguments);
    this.transitionToRoute(this.prevStep);
  }
}
