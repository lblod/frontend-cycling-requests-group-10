import Route from '@ember/routing/route';
import { getFormFrom } from '../utils/get-form';
import { service } from '@ember/service';

export default class ExampleFormInstanceRoute extends Route {
  @service store;
  async model(params) {
    const form = (this.createPersonFormDefinition = await getFormFrom(
      this.store,
      'cycling-aanvraag'
    ));
    return {
      id: params.id,
      form,
    };
  }
}
