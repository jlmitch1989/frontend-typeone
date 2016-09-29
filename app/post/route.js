import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('post', params.post_id);
  },

  actions: {
    deletePost (post) {
      post.destroyRecord()
      .then(() => this.transitionTo('posts'));
    },

    addComment (data) {
      console.log(data);
      let comment = this.get('store').createRecord('comment', data);
      comment.save();
    },
  },
});
