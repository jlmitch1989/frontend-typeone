import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  // userId: DS.attr('string'),
  // added this to add relationship
  comments: DS.hasMany('comment')
});
