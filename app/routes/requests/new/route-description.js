import Route from '@ember/routing/route';

export default class RequestsNewRouteDescriptionRoute extends Route {
  async model() {
    return this.modelFor('requests.new');
  }

  afterModel(model) {
    if (!model.cyclingRequest) {
      this.transitionTo('requests.new.identity');
    }
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.initialize();
  }
}
