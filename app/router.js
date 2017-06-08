import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('about', { path: '/#about' });
  this.route('locations');
  this.route('contact');
  this.route('gallery');
});

export default Router;
