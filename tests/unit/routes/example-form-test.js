import { module, test } from 'qunit';
import { setupTest } from 'frontend-hackathon/tests/helpers';

module('Unit | Route | example-form', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:example-form');
    assert.ok(route);
  });
});
