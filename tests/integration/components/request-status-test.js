import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-hackathon/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | request-status', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RequestStatus />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <RequestStatus>
        template block text
      </RequestStatus>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
