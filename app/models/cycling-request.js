import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class CyclingRequestModel extends Model {
  @attr('date') create;

  @belongsTo('request-state-classification') state;

  @hasMany('route-section') routeSections;
}
