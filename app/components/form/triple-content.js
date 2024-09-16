import Component from '@glimmer/component';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// as taken from LMB
export default class FormTripleContentComponent extends Component {
  @tracked expanded = false;

  get showSourceTriples() {
    return true; // get from env
  }

  @action
  toggleExpanded() {
    this.expanded = !this.expanded;
  }
}
