import Ember from 'ember';

export default Ember.Component.extend({
  newComment: {
    body: null,
  },

  actions: {
    addComment () {
      let data = this.get('newComment');
      data.post = this.get('post');
      this.sendAction('comment', data);
      // this clears the form field
      this.set('newComment.body', null);
      // console.log(data);
    },

    deleteComment (comment) {
      comment.destroyRecord();
    },
  },
});
