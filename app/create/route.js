import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createNewPost (data) {
      // console.log(data);
      let post = this.get('store').createRecord('post', data);
      post.save()
        .then(()=>this.transitionTo('posts'));
    },

  },
});
