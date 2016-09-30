import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  editable: DS.attr('boolean'),
  post: DS.belongsTo('post')
});
