import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').query('post', params);
  }

  // model () {
  //   return this.get('store').findAll('post');
  // },

  // actions: {
  //   deletePosts (post) {
  //     post.destroyRecord();
  //   },
  // },
});
