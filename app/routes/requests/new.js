import Route from '@ember/routing/route';
import { getFormFrom } from '../../utils/get-form';
import { service } from '@ember/service';

export default class RequestsNewIndexRoute extends Route {
    
  @service store;
  async model() {
    const formIdentity = (this.createPersonFormDefinition = await getFormFrom(
      this.store,
      'cycling-aanvraag'
    ));

    const cyclingRequest = null;
    return {
      formIdentity,
      cyclingRequest
    };
  }
}
