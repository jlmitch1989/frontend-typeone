import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('posts');
  this.route('posts/edit', { path: '/posts/:post_id/edit' });
  this.route('post', { path: '/posts/:post_id' });
  // this.route('post/comments', { path: '/posts/:post_id/comments' });
  this.route('app');
  this.route('create');
});

export default Router;
