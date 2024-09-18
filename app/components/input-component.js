import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class InputComponent extends Component {
  @action
  onChange(event) {
    const input = event.target.value;

    this.args.onChange(input.trim());
  }
}
