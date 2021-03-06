import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    user: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('store').query('post', params);
  },

  actions: {
    deletePosts (post) {
      post.destroyRecord();
    },

    editPosts (post) {
      this.transitionTo('posts/edit', post);
    },

    goCreate () {
      this.transitionTo('create');
    }
  },
});
