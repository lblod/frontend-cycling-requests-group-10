import Model, { attr, hasMany } from '@ember-data/model';

export default class GebruikerModel extends Model {
  @attr voornaam;
  @attr achternaam;
  @attr rijksregisterNummer;

  @hasMany('account', { async: true, inverse: 'gebruiker' }) account;

  // used for mock login
  get fullName() {
    return `${this.voornaam} ${this.achternaam}`.trim();
  }

  get group() {
    return {
      id: '10b49274-d46b-4308-88b1-3bdf7e996985',
    };
  }
}
