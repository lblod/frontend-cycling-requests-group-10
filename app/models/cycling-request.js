import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class CyclingRequestModel extends Model {
  @attr('date') created;
  @attr('string') raceName;
  @attr('string') raceDate;
  @attr('string') organizerName;
  @attr('string') organizerAddress;
  @attr('string') description;

  @belongsTo('request-state-classification') state;

  @hasMany('route-section') routeSections;
  // @hasMany('approval-by-commune') approvals;
}
