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
    // create empty address as a shortcut, no time to handel multiples addresses 
    const emptyAddress = this.store.createRecord('address');
    const newRouteSegment = this.store.createRecord('route-section', 
      {
        areas: [emptyAddress]
      }
    );

    routeSections.push(newRouteSegment);
  }

  @action
  async removeRouteSegment(segment) {
    (await this.getRouteSections()).removeObject(segment);
    segment.deleteRecord();
    segment.save();
  }

  @action
  editAddress(segment) {
    console.log('editAddress', arguments);
  }

  @action
  async onNext() {
    console.log('onNext', arguments);
    // by pass next step for now, go directly on page detail
    // this.transitionToRoute(this.nextStep);
    this.transitionToRoute('requests.request', { id: (await this.model.cyclingRequest).id });
  }

  @action
  onBack() {
    console.log('onBack', arguments);
    this.transitionToRoute(this.prevStep);
  }
}
