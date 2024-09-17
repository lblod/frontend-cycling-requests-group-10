import Model, { attr } from '@ember-data/model';

export default class AddressModel extends Model {
  @attr('string') boxNumber;
  @attr('string') number;
  @attr('string') street;
  @attr('string') postcode;
  @attr('string') municipality;
  @attr('string') country;
  @attr('string') locatorDesignator;
  @attr('string') locatorName;
  @attr('string') poBox;
  @attr('string') postName;
  @attr('string') fullAddress;
  @attr('string') addressRegisterId;
  @attr('string') addressRegisterUri;
}
