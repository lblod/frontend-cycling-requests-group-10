import Controller from '@ember/controller';

import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import { task, timeout } from 'ember-concurrency';

export default class MockLoginController extends Controller {
  @service store;

  queryParams = ['search', 'page'];
  @tracked model;
  @tracked search = '';
  @tracked page = 0;
  size = 10;

  queryStore = task(async () => {
    const filter = { provider: 'https://github.com/lblod/mock-login-service' };
    if (this.search) {
      filter.gebruiker = this.search;
    }
    const accounts = await this.store.query('account', {
      include: 'gebruiker',
      filter: filter,
      page: { size: this.size, number: this.page },
      sort: 'gebruiker.achternaam',
    });
    return accounts;
  });

  updateSearch = task({ restartable: true }, async (value) => {
    await timeout(500);
    this.page = 0;
    this.search = value;

    this.model = await this.queryStore.perform();
  });
}
