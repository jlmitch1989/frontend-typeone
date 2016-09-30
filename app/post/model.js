import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  editable: DS.attr('boolean'),
  user_id: DS.attr('number'),
  // added this to add relationship
  comments: DS.hasMany('comment')
});
