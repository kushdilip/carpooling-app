import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('riders', {path: '/rider'});
	this.route('owners', {path: '/owner'});
});

export default Router;
