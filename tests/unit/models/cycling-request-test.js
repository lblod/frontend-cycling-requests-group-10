import { module, test } from 'qunit';

import { setupTest } from 'frontend-hackathon/tests/helpers';

module('Unit | Model | cycling request', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('cycling-request', {});
    assert.ok(model);
  });
});
