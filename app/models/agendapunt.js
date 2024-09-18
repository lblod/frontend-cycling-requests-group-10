import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class AgendapuntModel extends Model {
  @attr('string') beschrijving;
  @attr('string') titel;
}