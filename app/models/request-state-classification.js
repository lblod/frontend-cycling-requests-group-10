import Model, { hasMany, attr } from '@ember-data/model';

export default class RequestStateClassificationModel extends Model {
  @attr label;
  @attr uri;
  @hasMany('cycling-request') requests;
}
