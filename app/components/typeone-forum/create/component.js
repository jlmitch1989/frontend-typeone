import Ember from 'ember';

export default Ember.Component.extend({
  newPost: {
    title: null,
    content: null,
  },

  actions: {
    createNewPost () {
      let data = this.get('newPost');
      data.post = this.get('post');
      this.sendAction('createNewPost', data);
      // this clears the form field
      this.set('newPost.title', null);
      this.set('newPost.content', null);
    },
  },
});
