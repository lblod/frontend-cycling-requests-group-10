import { module, test } from 'qunit';
import { setupTest } from 'frontend-hackathon/tests/helpers';

module('Unit | Controller | requests/new', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:requests/new');
    assert.ok(controller);
  });
});
