import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { fetch } from 'fetch';

export default class RequestsRequestAgendaItemsRoute extends Route {
  @service store;

  async model() {
    // Hacky hacky using fetch, ED did not work
    // This one should be rewritten in ED

    const request = this.modelFor('requests.request');
    // const approvals = await request.approvals;
    const results = await fetch(`/cycling-requests/${request.id}/approvals`, {
      include: 'municipality'
    })
    const json = await results.json()
    return await Promise.all(
      json.data.map(async (approval) => {
        const municipalityFetch = await fetch(approval.relationships.municipality.links.self)
        const municipality = await municipalityFetch.json();
        const considerationFetch = await fetch(approval.relationships.consideration.links.self);
        const consideration = await considerationFetch.json();

        return {
          name: municipality.data.attributes.uri,
          consideration: consideration.data.attributes,
        };
      })
    );
  }
}
