import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      this.sendAction('delete', this.get('post'));
    },
    edit () {
      this.sendAction('edit', this.get('post'));
  },
  }
});
