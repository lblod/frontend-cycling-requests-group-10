import Model, { attr, hasMany } from '@ember-data/model';

export default class LocationModel extends Model {
  @attr('string') label;
  @attr('string') niveau;

  @hasMany('administrative-unit') administrativeUnits;
}
