import { module, test } from 'qunit';

import { setupTest } from 'frontend-hackathon/tests/helpers';

module('Unit | Model | request state classification', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('request-state-classification', {});
    assert.ok(model);
  });
});
