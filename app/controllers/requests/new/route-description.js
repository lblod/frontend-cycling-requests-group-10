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
    return (await this.model.cyclingRequest).get('routeSections');
  }

  @action
  async addRouteSegment() {
    const routeSections = await this.getRouteSections();
    // create empty address as a shortcut, no time to handel multiples addresses
    const emptyAddress = this.store.createRecord('address', {
      municipality: 'Gent',
    });
    await emptyAddress.save();
    const newRouteSegment = this.store.createRecord('route-section', {
      areas: [emptyAddress],
      created: new Date().toString(),
    });

    routeSections.push(newRouteSegment);
  }

  @action
  async removeRouteSegment(segment) {
    (await this.getRouteSections()).removeObject(segment);
    segment.deleteRecord();
    segment.save();
  }

  @action
  editAddress() {
    console.log('editAddress', arguments);
  }

  @action
  async onNext() {
    console.log('onNext', arguments);
    await Promise.all(
      (
        await this.getRouteSections()
      ).map(async (section) => {
        await section.save();
      })
    );

    await (await this.model.cyclingRequest).save();

    console.log('onNext', await this.model.cyclingRequest);

    // this.transitionToRoute(this.nextStep);
    // TODO create items
    await fetch(
      `/cycling/mock/create-agenda-items/${this.model.cyclingRequest.id}`,
      { method: 'POST' }
    );
    this.transitionToRoute('requests.request', {
      id: (await this.model.cyclingRequest).id,
    });
  }

  @action
  onBack() {
    console.log('onBack', arguments);
    this.transitionToRoute(this.prevStep);
  }
}
