import Model, { attr, hasMany } from '@ember-data/model';

export default class RequestStateClassificationModel extends Model {
  @hasMany('cycling-request') requests;
}
