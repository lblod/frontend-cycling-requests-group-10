import Model, { attr, hasMany } from '@ember-data/model';

export default class RouteSectionModel extends Model {
  @attr('date') created;
  @attr('date') timeOfPassingStart;
  @attr('date') timeOfPassingEnd;
  @attr('number') distance;

  @hasMany('address') areas;
  
  // @hasMany('grant') grants;
  // @hasMany('refusal') refusals;
}
