import Component from '@glimmer/component';

export default class RequestStatusComponent extends Component {
  get statusText() {
    return this.args.state.get('label');
  }
  get statusSkin() {
    if (
      this.args.state.get('uri') ===
      'http://data.lblod.info/id/concept/cycling-request-statuses/rejected'
    ) {
      return 'danger';
    } else if (
      this.args.state.get('uri') ===
      'http://data.lblod.info/id/concept/cycling-request-statuses/approved'
    ) {
      return 'success';
    } else {
      return 'warning';
    }
  }
}
