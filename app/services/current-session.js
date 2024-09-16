import Service from '@ember/service';

import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentSessionService extends Service {
  @service session;
  @service store;

  @tracked account;
  @tracked user;
  @tracked roles = [];

  async load() {
    if (this.session.isAuthenticated) {
      let accountId =
        this.session.data.authenticated.relationships.account.data.id;
      this.account = await this.store.findRecord('account', accountId, {
        include: 'gebruiker',
      });

      this.user = this.account.gebruiker;
      this.roles = this.session.data.authenticated.data.attributes.roles;
    }
  }

  canAccess(role) {
    return this.roles.includes(role);
  }
}
