import Model, { attr, belongsTo } from '@ember-data/model';

export default class AdministrativeUnitModel extends Model {
  @attr('string') name;
  @attr('string') alternativeName;
  @attr('boolean') wantMailReceived;
  @attr('string') mailAddressForNotifications;

  @belongsTo('location') location;
  @belongsTo('administrative-unit-classification-code') classification;
}
