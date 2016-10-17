import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  editable: DS.attr('boolean'),
  user_id: DS.attr('number'),
  user: DS.attr(),
  post: DS.belongsTo('post')
});
