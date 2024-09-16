import { module, test } from 'qunit';
import { setupTest } from 'frontend-hackathon/tests/helpers';

module('Unit | Route | statistics', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:statistics');
    assert.ok(route);
  });
});
