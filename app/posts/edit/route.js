import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePosts (post) {
      post.save()
        .then(()=>this.transitionTo('posts'));
    },
  },
});
