import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment () {
      this.sendAction('deleteComment', this.get('comment'));
    },
  },
});
