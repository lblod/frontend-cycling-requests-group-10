import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ApprovalByCommuneModel extends Model {
  @attr('datetime') created;

  @belongsTo('agendapunt', { async: true })
  consideration;
  @belongsTo('agendapunt', { async: true })
  takingDomain;
  @belongsTo('agendapunt', { async: true })
  approvalMayor;
  @belongsTo('cycling-request', { async: true, inverse: 'approvals' })
  cyclingRequest;
}
