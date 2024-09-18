import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequestsNewRouteDescriptionController extends Controller {
  nextStep = 'requests.new.extra-info';
  prevStep = 'requests.new.identity';

  @service store;

  async initialize() {
    const routeSections = await this.getRouteSections();

    if (routeSections.length === 0) {
      await this.addRouteSegment();
    }
  }

  async getRouteSections() {
    return (await this.model.cyclingRequest).get("routeSections")
  }

  @action
  async addRouteSegment() {
    const routeSections = await this.getRouteSections();
    const newRouteSegment = this.store.createRecord('route-section');

    routeSections.push(newRouteSegment);
  }

  @action
  async removeRouteSegment(segment) {
    (await this.getRouteSections()).removeObject(segment);
    segment.deleteRecord();
    segment.save();
  }

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
